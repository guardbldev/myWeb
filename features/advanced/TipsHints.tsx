import React, { useState } from 'react';
const TIPS = [
  { id:1, text:"Drag components into the canvas to start building your site." },
  { id:2, text:"Right-click elements for more options like Lock, Hide, Edit." },
  { id:3, text:"Try the AI Assist for instant layouts or code." },
  { id:4, text:"Keyboard shortcuts make editing faster: Ctrl+Z=Undo, Ctrl+S=Save." }
];

export default function TipsHints() {
  const [tipIndex, setTipIndex] = useState(0);
  return (
    <div className="fixed bottom-4 right-4 z-40 bg-white rounded-xl px-4 py-3 shadow-lg border">
      <span className="text-xs font-bold">Tip:</span>
      <span className="ml-2">{TIPS[tipIndex].text}</span>
      <button className="ml-4 text-xs underline" onClick={()=>setTipIndex((tipIndex+1)%TIPS.length)}>Next tip</button>
    </div>
  );
}