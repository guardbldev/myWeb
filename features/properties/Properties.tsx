import React from 'react';
import { useCanvasEditor } from '../../hooks/useCanvasEditor';
export default function Properties() {
  const { elements, selection } = useCanvasEditor();
  const selected = elements.find(e=>selection.includes(e.id));
  if (!selected) return <div className="text-gray-400">No selection</div>;
  return (
    <div className="flex flex-col gap-3">
      <div className="font-bold text-lg">Properties</div>
      <div className="flex flex-col gap-3">
        <div>
          <label>Text</label>
          <input type="text" className="input"
            value={selected.text || ''}
            onChange={e=>{/* update selected.text */}}
          />
        </div>
        <div>
          <label>Position</label>
          <input type="number" value={selected.x} />
          <input type="number" value={selected.y} />
        </div>
        {/* ... W, H, Color, Shadow, TT, etc */}
      </div>
    </div>
  )
}