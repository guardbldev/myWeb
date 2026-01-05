import React, { useState } from 'react';
import Canvas from '../features/studio/Canvas/Canvas';
import LayersPanel from '../features/studio/LayersPanel/LayersPanel';
import Minimap from '../features/studio/Minimap/Minimap';
import Properties from '../features/properties/Properties';
import History from '../features/studio/History/History';
import ContextMenu from '../features/studio/ContextMenu/ContextMenu';
import Assets from '../features/studio/Assets/Assets';
import LogicPanel from '../features/logic/LogicPanel';
import Preview from '../features/studio/Preview/Preview';

export default function Studio() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="relative w-screen h-screen flex flex-col bg-[#f5f8fd]">
      {/* Studio Top Bar */}
      <header className="flex items-center h-14 px-5 bg-white shadow z-10">
        <div className="font-bold text-lg mr-6">My Website</div>
        <nav className="flex items-center space-x-5">
          <button className="font-semibold">Design</button>
          <button className="font-semibold">Logic</button>
          <button className="font-semibold">Code</button>
          <button className="font-semibold" onClick={()=>setShowPreview(v=>!v)}>Preview</button>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <span>AI Assist</span>
          <button className="bg-indigo-600 text-white rounded-xl px-4 py-2 font-bold ml-3 hover:bg-indigo-700">Deploy</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Side Panel */}
        <div className="flex flex-col bg-[#f7f7fa] border-r border-gray-200 w-64 p-3">
          <div className="mb-3">
            <span className="font-bold text-sm uppercase mb-1 block">Layers</span>
            <LayersPanel />
          </div>
          <div className="flex-1 overflow-auto">
            <Assets />
          </div>
        </div>

        {/* Central Canvas */}
        <div className="flex flex-1 relative">
          <Canvas />
          <Minimap />
        </div>

        {/* Properties sidebar */}
        <div className="w-80 border-l border-gray-200 bg-white p-4">
          <Properties />
        </div>
      </div>

      {/* Logic/Timeline/Output Modal */}
      <LogicPanel />

      {/* Undo/Redo */}
      <History />

      <ContextMenu />

      {/* Live preview modal */}
      {showPreview && (<Preview onClose={()=>setShowPreview(false)} />)}
    </div>
  )
}