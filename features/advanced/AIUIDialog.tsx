import React, { useState } from 'react';
import { getAILayoutSuggestion, generateAIUIFromPrompt } from './AI';

export default function AIUIDialog({ onApply }:{ onApply:(result:any)=>void }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSuggest() {
    setLoading(true);
    const blocks = await getAILayoutSuggestion(prompt);
    setLoading(false);
    onApply(blocks);
  }
  async function handleGenerate() {
    setLoading(true);
    const ui = await generateAIUIFromPrompt(prompt);
    setLoading(false);
    onApply(ui);
  }
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="font-bold mb-2">AI Powered Layout & Generator</h2>
        <textarea
          className="border rounded w-full p-2"
          rows={3}
          placeholder="Describe your website/page/section..."
          value={prompt}
          onChange={e=>setPrompt(e.target.value)}
        />
        <div className="flex gap-4 mt-4">
          <button className="px-3 py-1 bg-blue-600 text-white rounded"
            disabled={loading}
            onClick={handleSuggest}>Suggest Sections</button>
          <button className="px-3 py-1 bg-green-600 text-white rounded"
            disabled={loading}
            onClick={handleGenerate}>Generate Full UI</button>
        </div>
        {loading && <div className="text-gray-500 mt-3">AI is thinking...</div>}
        <button className="mt-4 text-xs text-red-500" onClick={()=>onApply(null)}>Close</button>
      </div>
    </div>
  );
}