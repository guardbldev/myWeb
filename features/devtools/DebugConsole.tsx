import React, { useState } from 'react';

export default function DebugConsole() {
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function runCommand() {
    try {
      // eslint-disable-next-line
      const result = eval(input);
      setLogs([...logs, `> ${input}`, String(result)]);
    } catch (e) {
      setLogs([...logs, `> ${input}`, `Error: ${e}`]);
    }
    setInput("");
  }

  return (
    <div className="p-3 bg-black text-white rounded w-full max-w-xl">
      <div className="font-bold text-lg mb-2">Debug Console</div>
      <div className="mb-2">
        <input className="border rounded bg-gray-800 text-white px-2 py-1 w-full"
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==="Enter"&&runCommand()} />
        <button className="mt-2 px-3 py-1 bg-blue-600 rounded" onClick={runCommand}>Run</button>
      </div>
      <div className="h-40 overflow-auto bg-gray-800 rounded p-2 text-xs font-mono">
        {logs.map((log,i)=>(
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  );
}