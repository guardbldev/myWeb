import React from 'react';
import chroma from 'chroma-js';
export function AccessibilityChecker({ fg, bg }:{ fg:string, bg:string }) {
  const contrast = chroma.contrast(fg, bg);
  const ok = contrast > 4.5; // WCAG AA
  return (
    <div className="mt-2 flex items-center gap-2">
      <span>Contrast: {contrast.toFixed(2)}</span>
      <span className={ok ? 'text-green-600' : 'text-red-600'}>
        {ok ? 'AA Pass' : 'Fail'}
      </span>
    </div>
  );
}