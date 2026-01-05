import React from 'react';

export default function StudioCanvas() {
  // Later: Add drag-and-drop, snap to grid, selection, etc.
  return (
    <main className="flex-1 h-full relative bg-white rounded-xl m-4 border shadow-lg overflow-hidden">
      {/* Render UI blocks/components here */}
      <div className="h-full w-full flex items-center justify-center text-gray-400 text-2xl font-medium">
        {/* Placeholder */}
        🧱 Drag components here to start!
      </div>
    </main>
  );
}