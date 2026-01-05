import React, { useState } from 'react';

export default function ApiKeyManager() {
  const [keys, setKeys] = useState<{ name: string, value: string }[]>([]);
  const [newName, setNewName] = useState("");
  const [newValue, setNewValue] = useState("");

  function addKey() {
    setKeys([...keys, { name: newName, value: newValue }]);
    setNewName(""); setNewValue("");
    // In production: encrypt/store in localStorage, IndexedDB, or via backend API
  }
  function removeKey(idx: number) {
    setKeys(keys.filter((_, i) => i !== idx));
  }

  return (
    <div className="p-3 bg-white rounded shadow w-full max-w-md">
      <div className="font-bold mb-2">API Key Manager</div>
      <div className="mb-2 flex gap-2">
        <input className="border rounded px-2" placeholder="Name" value={newName} onChange={e=>setNewName(e.target.value)} />
        <input className="border rounded px-2" placeholder="API Key" type="password" value={newValue} onChange={e=>setNewValue(e.target.value)} />
        <button className="bg-green-600 text-white px-3 rounded" onClick={addKey}>Add</button>
      </div>
      <ul>
        {keys.map((k,i)=>(
          <li key={i} className="flex justify-between items-center mb-2 border-b pb-1">
            <span className="font-mono">{k.name}</span>
            <span className="ml-4 font-mono text-xs">{k.value.slice(0,4)+"***"}</span>
            <button className="ml-2 bg-red-600 text-white px-2 py-1 rounded" onClick={()=>removeKey(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}