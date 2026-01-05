import React, { useRef, useEffect } from 'react';
// import all drag/dnd/zoom from useCanvasEditor (see hooks)
import { useCanvasEditor } from '../../../hooks/useCanvasEditor';

export default function Canvas() {
  const {
    elements, 
    dragProps, dropProps, 
    zoom, setZoom, 
    selection, setSelection,
    snapLines, selectionBox
  } = useCanvasEditor();

  return (
    <main className="relative flex-1 bg-white rounded-xl m-4 border shadow-lg overflow-hidden">
      {/* Canvas controls: Zoom */}
      <div className="absolute top-4 right-4 z-30 flex gap-2">
        <button onClick={()=>setZoom(zoom-0.1)} disabled={zoom <= 0.2}>-</button>
        <span>{Math.round(zoom*100)}%</span>
        <button onClick={()=>setZoom(zoom+0.1)} disabled={zoom >= 2}>+</button>
      </div>
      {/* Snap lines */}
      {snapLines.map(line =>
        <div key={line.id}
          className="absolute bg-blue-400"
          style={line.style}
        />
      )}
      {/* Elements/components rendering */}
      <div
        {...dropProps}
        style={{ 
          transform: `scale(${zoom})`,
          transformOrigin: 'top left',
          width: '100%', height: '100%'
        }}
        className="relative w-full h-full"
      >
        {elements.map(el => (
          <div
            key={el.id}
            {...dragProps(el.id)}
            className={`absolute ${el.selected ? 'ring-2 ring-blue-500' : ''}`}
            style={{
              left: el.x, top: el.y, 
              width: el.w, height: el.h, 
              zIndex: el.z,
              opacity: el.locked ? 0.5 : 1,
              pointerEvents: el.locked ? 'none' : 'auto'
            }}
            onClick={e => {e.stopPropagation(); setSelection(el.id)}}
            tabIndex={0}
          >
            {el.type === 'text' && (
              <span contentEditable={el.editable}
                className="text-base"
                suppressContentEditableWarning
              >{el.text}</span>
            )}
            {/* other component types */}
          </div>
        ))}
        {/* Selection box for multi-select */}
        {selectionBox && (
          <div className="absolute border-2 border-sky-400 bg-blue-200/10" style={{
            left: selectionBox.x,
            top: selectionBox.y,
            width: selectionBox.w,
            height: selectionBox.h,
            pointerEvents: 'none',
          }}></div>
        )}
      </div>
    </main>
  );
}