import React from 'react';

export default function Minimap() {
  // TODO: Only show if canvas is zoomed or very large
  return (
    <div className="absolute right-5 bottom-5 w-32 h-24 bg-gradient-to-br from-indigo-200 to-pink-200 rounded-lg shadow p-2 text-slate-500 text-xs hidden md:block z-50">
      Minimap
    </div>
  );
}