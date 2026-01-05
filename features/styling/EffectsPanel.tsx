import React from 'react';
export default function EffectsPanel({ elementId, state, styles }:any) {
  // Shadow, blur, cursor UI
  return (
    <div className="mt-3">
      <label>Shadow:</label>
      <input type="range" min={0} max={24} value={styles.shadow||0}
        onChange={e=>{/* update shadow */}} />
      <label>Blur:</label>
      <input type="range" min={0} max={16} value={styles.blur||0}
        onChange={e=>{/* update blur */}} />
      <label>Cursor:</label>
      <select value={styles.cursor||'pointer'} onChange={e=>{/* update cursor */}}>
        <option value="pointer">Pointer</option>
        <option value="grab">Grab</option>
        <option value="crosshair">Crosshair</option>
      </select>
    </div>
  );
}