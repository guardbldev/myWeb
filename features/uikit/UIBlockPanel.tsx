import React from "react";
import { UI_BLOCKS } from "./UIBlocksLibrary";

export default function UIBlockPanel() {
  return (
    <div>
      <h2 className="font-bold text-lg mb-2">UI Kit</h2>
      <div className="grid grid-cols-2 gap-2">
        {UI_BLOCKS.map((block) => (
          <button
            key={block.id}
            className="rounded-2xl shadow-lg bg-gradient-to-br from-indigo-200 to-pink-200 p-3 flex flex-col items-center transition hover:scale-105"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("block", block.id)}
          >
            <img src={block.preview} alt={block.name} className="w-16 h-10 rounded mb-1" />
            <span className="font-medium">{block.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}