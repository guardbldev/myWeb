import React from "react";
import { useBuilderStore } from "./builderStore";
import { AnimatePresence, motion } from "framer-motion";

export default function Canvas() {
  const { components, addComponent, selectComponent } = useBuilderStore();

  function handleDrop(e: React.DragEvent) {
    const blockId = e.dataTransfer.getData("block");
    if (blockId) addComponent(blockId, { x: e.clientX - 250, y: e.clientY - 45 });
  }

  return (
    <div
      className="flex-1 m-4 rounded-3xl shadow-xl border bg-white bg-opacity-80 relative overflow-auto transition-all"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{ minHeight: 580 }}
    >
      {/* Fancy background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-indigo-50 pointer-events-none" />
      <div className="relative z-10 grid gap-4">
        <AnimatePresence>
          {components.map((comp) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="rounded-xl bg-white p-4 shadow-lg transition cursor-pointer"
              style={{
                position: "absolute",
                left: comp.x,
                top: comp.y,
              }}
              onClick={() => selectComponent(comp.id)}
            >
              {comp.render()}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}