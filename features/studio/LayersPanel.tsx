import React from 'react';

export default function LayersPanel() {
  // Later: Add list, lock/hide, drag to reorder, context menu, etc.
  return (
    <aside className="w-60 bg-slate-100 border-r p-3 flex flex-col gap-2">
      <h2 className="font-medium mb-2">Layers</h2>
      {/* List of layers/components */}
      <div className="flex flex-col gap-2">
        <div className="bg-white rounded-md px-3 py-1.5 shadow text-sm">Header</div>
        <div className="bg-white rounded-md px-3 py-1.5 shadow text-sm">Hero</div>
        <div className="bg-white rounded-md px-3 py-1.5 shadow text-sm">Footer</div>
      </div>
    </aside>
  );
}