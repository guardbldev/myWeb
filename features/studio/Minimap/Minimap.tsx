import React from 'react';
export default function Minimap() {
  // Wire to canvas state and render thumbnail
  return (
    <div className="fixed right-5 bottom-5 w-32 h-24 bg-gradient-to-br from-indigo-200 to-pink-200 rounded-lg shadow p-2 z-50">
      <span>Minimap</span>
      {/* TODO: actual preview of canvas layout */}
    </div>
  )
}