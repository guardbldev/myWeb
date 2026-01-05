import React, { useState } from 'react';

export default function BuildSettingsPanel({ settings, onSave }) {
  const [buildSettings, setBuildSettings] = useState(settings || {
    minify: true,
    outputDir: "dist",
    cdnUrl: "",
    filenamePattern: "[name].[hash].js"
  });

  function updateField(field, value) {
    setBuildSettings(s => ({ ...s, [field]: value }));
  }
  function saveSettings() {
    onSave(buildSettings);
  }

  return (
    <form className="p-3 rounded border bg-white w-full max-w-md">
      <div className="mb-3 font-bold text-lg">Build Settings</div>
      <label>Minify:</label>
      <input type="checkbox" checked={buildSettings.minify} onChange={e=>updateField("minify", e.target.checked)} />
      <label className="ml-3">Output Directory:</label>
      <input type="text" value={buildSettings.outputDir} onChange={e=>updateField("outputDir", e.target.value)} />
      <label className="ml-3">CDN URL:</label>
      <input type="text" value={buildSettings.cdnUrl} onChange={e=>updateField("cdnUrl", e.target.value)} />
      <label className="ml-3">Filename Pattern:</label>
      <input type="text" value={buildSettings.filenamePattern} onChange={e=>updateField("filenamePattern", e.target.value)} />
      <button className="mt-3 px-3 py-1 bg-blue-500 text-white rounded" onClick={saveSettings}>Save</button>
    </form>
  )
}