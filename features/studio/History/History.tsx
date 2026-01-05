import React from 'react';
import { useCanvasEditor } from '../../../hooks/useCanvasEditor';

export default function History() {
  const { undo, redo } = useCanvasEditor();
  return (
    <div className="fixed top-20 left-6 flex flex-col gap-2 z-40">
      <button className="rounded bg-gray-200 px-2" onClick={undo}>Undo</button>
      <button className="rounded bg-gray-200 px-2" onClick={redo}>Redo</button>
    </div>
  )
}