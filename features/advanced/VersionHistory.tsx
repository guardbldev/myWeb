import React, { useState } from 'react';
import { useCanvasEditor } from '../../hooks/useCanvasEditor';

export default function VersionHistory() {
  const { history, historyIndex, undo, redo, setHistoryIndex } = useCanvasEditor();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="px-2 py-1 bg-gray-200 rounded" onClick={()=>setOpen(true)}>
        Version History
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-xl w-96">
            <h2 className="font-bold text-xl mb-3">All Versions</h2>
            <ul className="max-h-64 overflow-y-auto">
              {history.map((h, i) => (
                <li key={i}
                  className={`px-2 py-1 rounded mb-2 cursor-pointer ${i===historyIndex?'bg-blue-100 font-bold':'bg-gray-100'}`}
                  onClick={()=>{setHistoryIndex(i); setOpen(false);}}>
                  Version {i + 1} {i === history.length - 1 ? '(latest)' : ''}
                  <span className="ml-2 text-xs text-gray-500">{h.timestamp}</span>
                </li>
              ))}
            </ul>
            <button className="mt-2 px-4 py-2 rounded bg-red-500 text-white" onClick={()=>setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}