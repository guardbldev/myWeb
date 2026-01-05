import React from 'react';

export default function DeployTimeline({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;
  // Timeline + output and console
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center">
      <div className="bg-white rounded-xl w-[500px] max-w-full p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Deploy Timeline</h2>
        <div className="mb-3 text-base font-mono">✔️ Your site is live!</div>
        <div className="px-2 py-1 rounded bg-slate-100 font-mono text-xs mb-2">Console Output: Build successful</div>
        <button className="mt-3 px-4 py-2 rounded bg-indigo-600 text-white" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}