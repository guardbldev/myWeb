import React from 'react';
import { BlockBase } from './BlockTypes';
import { BlockDefinitions } from './blocksLibrary';

export function BlockUI({ block, selected, onEdit, onRemove }:
{ block: BlockBase, selected: boolean, onEdit:()=>void, onRemove:()=>void }) {
  return (
    <div
      tabIndex={0}
      className={`rounded px-3 py-2 shadow cursor-move select-none text-sm border-2
        ${BlockDefinitions[block.type].color}
        ${selected ? 'border-blue-700 ring-2 ring-blue-500' : 'border-transparent'}`}
      style={{ minWidth: 120, minHeight: 32 }}
      onDoubleClick={onEdit}
    >
      <div className="flex items-center justify-between">
        <span>{block.label}</span>
        <button className="text-gray-900 ml-3" onClick={onRemove}>✕</button>
      </div>
    </div>
  );
}