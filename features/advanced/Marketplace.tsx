import React, { useState } from 'react';

const MARKET_BLOCKS = [
  { id: "hero-1", name: "Modern Hero Section", preview: "/market/hero1.png" },
  { id: "form-2", name: "Contact Us Form", preview: "/market/form2.png" },
  { id: "gallery-3", name: "Photo Gallery Grid", preview: "/market/gallery3.png" }
];

export default function Marketplace({ onInsert }:{ onInsert:(block:any)=>void }) {
  const [search, setSearch] = useState("");
  return (
    <div className="p-6 bg-white w-full rounded-xl mb-4">
      <div className="font-bold text-lg mb-2">Community Blocks Marketplace</div>
      <input
        className="border rounded px-2 py-1"
        placeholder="Search..."
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {MARKET_BLOCKS.filter(b=>b.name.toLowerCase().includes(search.toLowerCase())).map(b=>(
          <div key={b.id} className="border rounded-lg p-2 flex flex-col items-center">
            <img src={b.preview} className="w-32 h-20 object-cover rounded mb-2" />
            <span className="font-semibold">{b.name}</span>
            <button className="mt-1 px-3 py-1 rounded bg-indigo-600 text-white"
              onClick={()=>onInsert(b)}
            >Insert</button>
          </div>
        ))}
      </div>
    </div>
  );
}