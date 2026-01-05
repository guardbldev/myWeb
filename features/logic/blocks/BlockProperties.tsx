import React from 'react';
import { useLogicStore } from '../logicStore';
import { BlockDefinitions } from './blocksLibrary';

export function BlockProperties({ blockId, onClose }: { blockId: string, onClose: ()=>void }) {
  const store = useLogicStore();
  const block = store.blocks.find(b => b.id === blockId);
  if (!block) return null;
  const def = BlockDefinitions[block.type];

  // Render custom fields per block
  return (
    <div className="fixed right-8 bottom-8 p-6 z-50 bg-white rounded-xl shadow-2xl border w-96">
      <div className="flex items-center justify-between">
        <div className="font-bold">{def.label} Properties</div>
        <button onClick={onClose} className="text-lg">✕</button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {Object.keys(block.data).map(key=>(
          <div key={key}>
            <label className="text-xs font-semibold">{key}</label>
            <input
              className="input w-full"
              value={block.data[key]}
              onChange={e=>{
                store.updateBlock(blockId, { [key]: e.target.value });
              }}/>
          </div>
        ))}
      </div>
    </div>
  );
}