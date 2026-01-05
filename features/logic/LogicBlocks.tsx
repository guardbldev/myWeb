import React from 'react';

export default function LogicBlocks() {
  // Later: Add drag-and-drop blocks, logic wiring, etc.
  return (
    <aside className="w-72 bg-white border-l p-3 flex flex-col gap-2">
      <h2 className="font-medium mb-2">Logic / Script</h2>
      {/* Block-style scripting area (Scratch style) */}
      <div className="flex flex-col gap-2 text-xs">
        <div className="rounded p-2 bg-yellow-100 border">On Button Click</div>
        <div className="rounded p-2 bg-green-100 border">Navigate to Page</div>
      </div>
    </aside>
  );
}