import React from 'react';

const SNIPPETS = [
  { name:"Fetch API", code:`fetch('/api/data').then(res=>res.json())` },
  { name:"Toggle Class", code:`element.classList.toggle('active')` },
  { name:"Promise Example", code:`new Promise((resolve,reject)=>{})` },
  { name:"Show/Hide", code:`element.style.display='none'` },
  { name:"Form Submit", code:`form.addEventListener('submit',...)` },
  { name:"Serverless", code:`exports.handler = async () => {}` }
];

export default function SnippetLibrary({ onInsert }:{onInsert:(code:string)=>void}) {
  return (
    <div className="p-4 bg-white border w-full max-w-xs">
      <div className="font-bold mb-2">Code Snippets</div>
      {SNIPPETS.map(snip=>(
        <div key={snip.name}
          className="bg-gray-100 rounded px-3 py-2 mb-2 text-sm cursor-pointer hover:bg-blue-100"
          onClick={()=>onInsert(snip.code)}>
          {snip.name}
        </div>
      ))}
    </div>
  );
}