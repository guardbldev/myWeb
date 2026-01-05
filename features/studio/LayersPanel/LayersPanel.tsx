import React from 'react';
import { useCanvasEditor } from '../../../hooks/useCanvasEditor';
export default function LayersPanel() {
  const { layers, selectLayer, lockLayer, hideLayer } = useCanvasEditor();

  return (
    <div>
      {layers.map(layer => (
        <div className="flex items-center gap-2 py-1 px-2 rounded hover:bg-sky-100 cursor-pointer"
          key={layer.id}
          onClick={()=>selectLayer(layer.id)}
        >
          <span>{/* eye/lock icons */}</span>
          <span>{layer.name}</span>
          <button onClick={e => { e.stopPropagation(); lockLayer(layer.id) }}>{layer.locked ? '🔒' : '🔓'}</button>
          <button onClick={e => { e.stopPropagation(); hideLayer(layer.id) }}>{layer.hidden ? '🙈' : '👁️'}</button>
        </div>
      ))}
    </div>
  )
}