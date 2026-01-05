import React from "react";
import FontManager from "./FontManager";
import IconPicker from "./IconPicker";
import GradientEditor from "./GradientEditor";
import EffectsPanel from "./EffectsPanel";
import MicroInteractionPanel from "./MicroInteractionPanel";
import AccessibilityChecker from "./AccessibilityChecker";
import ThemeEditor from "./ThemeEditor";

export default function PropertiesPanel() {
  // Sample selected mock
  const selected = { color: "#2563EB", bg: "#fff", font: "Montserrat", icon: null };
  return (
    <aside className="w-80 bg-white/90 border-l-2 border-indigo-200 p-5 rounded-l-2xl shadow-lg flex flex-col gap-4 z-50">
      <ThemeEditor />
      <FontManager />
      <IconPicker />
      <GradientEditor />
      <EffectsPanel />
      <MicroInteractionPanel />
      <AccessibilityChecker fg={selected.color} bg={selected.bg} />
    </aside>
  );
}