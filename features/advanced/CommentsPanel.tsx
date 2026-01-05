import React, { useState } from 'react';

export default function CommentsPanel({ componentId }: { componentId: string }) {
  const [comments, setComments] = useState<{ text: string; author: string; ts: number }[]>([]);
  const [text, setText] = useState("");

  function postComment() {
    setComments([...comments, { text, author: "User", ts: Date.now() }]);
    setText("");
  }

  return (
    <div className="p-4 bg-yellow-50 rounded-xl w-full">
      <div className="font-bold mb-2">Comments</div>
      <ul>
        {comments.map((c, i) => (
          <li key={i} className="mb-2 text-sm">
            <b>{c.author}</b>: {c.text} <span className="text-xs text-gray-400">({new Date(c.ts).toLocaleTimeString()})</span>
          </li>
        ))}
      </ul>
      <div className="flex mt-2 gap-2">
        <input className="flex-1 border rounded px-2 py-1" value={text} onChange={e=>setText(e.target.value)} placeholder="Add comment..." />
        <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={postComment}>Send</button>
      </div>
    </div>
  );
}