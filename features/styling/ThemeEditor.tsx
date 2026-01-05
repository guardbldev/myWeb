import React from 'react';
export default function ThemeEditor({theme, setTheme}:{theme:string, setTheme:(t:string)=>void}) {
  return (
    <div className="flex gap-2 items-center">
      <div className="font-bold">Theme:</div>
      <button className={`px-3 py-1 rounded ${theme==='light'?'bg-slate-200':'bg-white'}`}
        onClick={()=>setTheme('light')}>Light</button>
      <button className={`px-3 py-1 rounded ${theme==='dark'?'bg-gray-800 text-white':'bg-white'}`}
        onClick={()=>setTheme('dark')}>Dark</button>
      {/* Color sets */}
      {/* Save, switch presets */}
    </div>
  );
}