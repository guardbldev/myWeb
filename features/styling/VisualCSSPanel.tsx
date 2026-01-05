import React from 'react';
import { SketchPicker } from 'react-color';
import { useCanvasEditor } from '../../hooks/useCanvasEditor';
import EffectsPanel from './EffectsPanel';
import StateManager from './StateManager';
import GradientEditor from './GradientEditor';

export default function VisualCSSPanel() {
  const { selection, elements, updateElement } = useCanvasEditor();
  const selected = elements.find(e => selection.includes(e.id));
  if (!selected) return <div className="p-4 text-gray-400">Select an element</div>;

  // States: normal, hover, active, focus
  const [cssTab, setCssTab] = React.useState<'normal'|'hover'|'active'|'focus'>('normal');
  // CSS State data binding
  const styleData = selected.styles?.[cssTab] || {};

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-2 mb-2">
        {(['normal','hover','active','focus'] as const).map(state=>(
          <button key={state} className={`px-3 py-1 rounded ${cssTab===state?'bg-indigo-300':'bg-white'}`}
            onClick={()=>setCssTab(state)}>
            {state}
          </button>
        ))}
      </div>
      <div>
        <label className="text-xs">Background</label>
        <GradientEditor
          value={styleData.background || "#fff"}
          onChange={bg=>updateElement(selected.id, {styles:{...selected.styles, [cssTab]:{...styleData, background:bg}}})}
        />
      </div>
      <div>
        <label className="text-xs">Text Color</label>
        <SketchPicker
          color={styleData.color || "#333"}
          onChange={c=>updateElement(selected.id, {styles:{...selected.styles,[cssTab]:{...styleData, color:c.hex}}})}
        />
      </div>
      <EffectsPanel elementId={selected.id} state={cssTab} styles={styleData} />
      <StateManager elementId={selected.id} selected={selected} />
    </div>
  );
}