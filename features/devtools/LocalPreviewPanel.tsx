import React, { useState, useEffect } from 'react';
import { useFilesStore } from '../code/filesStore';

export default function LocalPreviewPanel() {
  const filesStore = useFilesStore();
  const [srcDoc, setSrcDoc] = useState("");

  // Compose full static HTML from code/files
  useEffect(() => {
    const files = gatherAllFiles(filesStore.tree);
    const indexHtml = files.find(f => f.name === "index.html");
    const css = files.find(f => f.name === "style.css");
    const js = files.find(f => f.name === "app.js");
    const bundle = `
      ${indexHtml?.code || ""}
      <style>${css?.code || ""}</style>
      <script>${js?.code || ""}</script>
    `;
    setSrcDoc(bundle);
  }, [filesStore.tree]);

  function openPreviewTab() {
    const win = window.open("", "_blank");
    if(win) win.document.write(srcDoc);
  }

  return (
    <div className="rounded border p-2 bg-white">
      <div className="mb-2 flex items-center">
        <span className="font-bold text-lg">Local Preview</span>
        <button className="ml-2 px-2 py-1 bg-green-200 rounded" onClick={openPreviewTab}>
          Open in new tab
        </button>
      </div>
      <iframe
        title="local-preview"
        className="w-full h-80 border"
        srcDoc={srcDoc}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}

function gatherAllFiles(tree) {
  let out = [];
  for (let file of tree) {
    if (file.type === "folder" && file.children) {
      out.push(...gatherAllFiles(file.children));
    } else {
      out.push(file);
    }
  }
  return out;
}