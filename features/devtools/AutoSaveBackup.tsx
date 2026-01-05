import React, { useEffect, useState } from 'react';
import { useCanvasEditor } from '../../hooks/useCanvasEditor';

export default function AutoSaveBackup() {
  const { elements, save, loadBackup } = useCanvasEditor();
  const [lastSaved, setLastSaved] = useState<Date|null>(null);
  const [backups, setBackups] = useState<{ ts: number, data: any }[]>([]);

  // Auto-save every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      save();
      setLastSaved(new Date());
      setBackups(prev => [
        ...prev.slice(-9), // Last 10
        { ts: Date.now(), data: elements }
      ]);
    }, 15000);
    return () => clearInterval(interval);
  }, [elements, save]);

  return (
    <div className="p-2 text-xs">
      Auto-saved at {lastSaved?.toLocaleTimeString() || '---'}
      <button className="ml-4 px-2 py-1 bg-blue-200 rounded" onClick={()=>{
        setBackups(prev => [
          ...prev.slice(-9),
          { ts: Date.now(), data: elements }
        ]);
      }}>
        Manual Backup
      </button>
      <div className="mt-2">
        <span className="font-bold">Backups:</span>
        {backups.length === 0 && <span>None yet.</span>}
        {backups.map((b, idx) =>
          <button key={b.ts} className="ml-2 px-1 py-0.5 border rounded text-xs"
            onClick={() => loadBackup(b.data)}>
            {new Date(b.ts).toLocaleTimeString()}
          </button>
        )}
      </div>
    </div>
  );
}