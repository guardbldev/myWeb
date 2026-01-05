import React, { useState } from "react";
import TopBar from "../components/TopBar";
import UIBlockPanel from "../features/uikit/UIBlockPanel";
import Canvas from "../features/builder/Canvas";
import PropertiesPanel from "../features/styling/PropertiesPanel";
import LayersPanel from "../features/builder/LayersPanel";
import LogicPanel from "../features/logic/LogicPanel";
import CodingPanel from "../features/code/CodingPanel";
import ExportPanel from "../features/export/ExportPanel";
import AdvancePanel from "../features/advanced/AdvancePanel";
import DevToolsPanel from "../features/devtools/DevToolsPanel";
import CommentsPanel from "../features/comments/CommentsPanel";
import TipsHints from "../features/advanced/TipsHints";
import KeyboardShortcuts from "../features/advanced/KeyboardShortcuts";
import { AnimatePresence, motion } from "framer-motion";

export default function StudioPage() {
  const [showCoding, setShowCoding] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showDevTools, setShowDevTools] = useState(false);

  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-br from-indigo-100 via-pink-50 to-pink-200">
      <TopBar
        onCode={() => setShowCoding((v) => !v)}
        onExport={() => setShowExport((v) => !v)}
        onDevTools={() => setShowDevTools((v) => !v)}
      />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white/80 border-r border-gray-200 p-3 flex flex-col gap-3">
          <UIBlockPanel />
          <LayersPanel />
        </aside>
        <main className="flex-1 flex overflow-hidden relative">
          <Canvas />
          <PropertiesPanel />
          <CommentsPanel />
        </main>
        <AdvancePanel />
      </div>
      <LogicPanel />
      <TipsHints />
      <KeyboardShortcuts />

      {/* Fancy Overlays */}
      <AnimatePresence>
        {showCoding && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          >
            <CodingPanel onClose={() => setShowCoding(false)} />
          </motion.div>
        )}
        {showExport && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center"
          >
            <ExportPanel onClose={() => setShowExport(false)} />
          </motion.div>
        )}
        {showDevTools && (
          <motion.div
            initial={{ opacity: 0, x: 64 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 64 }}
            className="fixed right-0 top-0 bg-white/95 shadow-lg z-50"
            style={{ width: 520, height: "100vh" }}
          >
            <DevToolsPanel onClose={() => setShowDevTools(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}