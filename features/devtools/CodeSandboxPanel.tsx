import React, { useState } from 'react';

export default function CodeSandboxPanel() {
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const [html, setHtml] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  function runSandbox() {
    setSrcDoc(`
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `);
  }

  return (
    <div className="p-4 bg-white rounded w-full max-w-xl">
      <div className="font-bold text-lg mb-2">Code Sandbox</div>
      <div className="mb-2">
        <label>HTML:</label>
        <textarea className="border rounded w-full" rows={3} value={html} onChange={e=>setHtml(e.target.value)} />
      </div>
      <div className="mb-2">
        <label>CSS:</label>
        <textarea className="border rounded w-full" rows={2} value={css} onChange={e=>setCss(e.target.value)} />
      </div>
      <div className="mb-2">
        <label>JS:</label>
        <textarea className="border rounded w-full" rows={2} value={js} onChange={e=>setJs(e.target.value)} />
      </div>
      <button className="px-3 py-1 bg-green-500 text-white rounded mt-2" onClick={runSandbox}>Run</button>
      <div className="mt-4 border rounded">
        <iframe title="sandbox" srcDoc={srcDoc} className="w-full h-60" sandbox="allow-scripts allow-same-origin" />
      </div>
    </div>
  );
}