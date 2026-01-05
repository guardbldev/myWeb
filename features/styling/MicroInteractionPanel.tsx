import React from 'react';

const MICRO_PRESETS = [
  { name: "Button Bounce", code: "transform:scale(1.1);" },
  { name: "Fade In", code: "opacity:0;transition:opacity .4s;opacity:1;" },
  { name: "Card Hover Raise", code: "box-shadow:0 16px 32px rgba(0,0,0,.12);" },
  { name: "Icon Spin", code: "animation:spin 1s infinite linear;" }
];

export default function MicroInteractionPanel({ onApply }:{ onApply:(css:string)=>void }) {
  return (
    <div>
      <div className="font-bold mb-2">Micro-interactions</div>
      {MICRO_PRESETS.map(p=>(
        <button
          key={p.name}
          className="px-3 py-1 bg-blue-100 rounded mb-2"
          onClick={()=>onApply(p.code)}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}