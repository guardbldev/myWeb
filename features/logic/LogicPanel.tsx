import React, { useState } from 'react';
import ReactFlow, {
  addEdge, Controls, MiniMap, Background, OnConnect, Handle, Node, Edge
} from 'react-flow-renderer';
import { useLogicStore } from './logicStore';
import { BlockDefinitions, makeBlock } from './blocks/blocksLibrary';
import { v4 as uuid } from 'uuid';

// Custom node for block editing
const CustomNode = ({ data }: any) => (
  <div style={{ minWidth: 130 }}>
    <div className={"p-2 rounded shadow-md " + BlockDefinitions[data.type].color}>
      <b>{BlockDefinitions[data.type].label}</b>
    </div>
  </div>
);

export default function LogicPanel() {
  const store = useLogicStore();
  const [selected, setSelected] = useState<string | null>(null);

  // Convert to react-flow nodes/edges
  const nodes: Node[] = store.blocks.map(b=>({
    id: b.id, type: "custom", data: b, position: b.position as any,
  }));
  const edges: Edge[] = store.connections.map(c=>({
    id: `${c.source}-${c.target}`,
    source: c.source, target: c.target, animated: true
  }));

  const onConnect: OnConnect = (params) => {
    store.connect(params.source!, params.target!);
  };

  function onDropBlock(type: string, e: React.DragEvent) {
    const canvas = (e.target as HTMLElement).getBoundingClientRect();
    store.addBlock(
      makeBlock(type as any, { x: e.clientX - canvas.left, y: e.clientY - canvas.top })
    )
  }

  return (
    <div className="absolute z-40 left-1/4 right-2 bottom-0 h-[45%]
        rounded-t-xl border-t border-gray-300 bg-white">
      <div className="h-full relative">
        {/* Toolbox */}
        <div className="absolute left-2 top-2 z-20">
          {Object.entries(BlockDefinitions).map(([bt, def])=>(
            <div key={bt}
              draggable
              onDragStart={e=>e.dataTransfer.setData('block', bt)}
              className={def.color+" px-2 py-1 rounded mb-2 text-xs cursor-pointer select-none"}>
              {def.label}
            </div>
          ))}
        </div>
        {/* ReactFlow canvas */}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          minZoom={0.3}
          maxZoom={2}
          fitView
          nodeTypes={{ custom: CustomNode }}
          onConnect={onConnect}
          onNodeClick={(_,n)=>setSelected(n.id)}
          onDrop={e=>{
            const type = e.dataTransfer.getData('block');
            if(type) onDropBlock(type, e);
          }}
          onDragOver={e=>e.preventDefault()}
        >
          <Controls />
          <MiniMap />
          <Background gap={16} />
        </ReactFlow>
        {/* Block properties/modal */}
        {selected && <BlockProperties blockId={selected} onClose={()=>setSelected(null)} />}
      </div>
    </div>
  )
}

// ---- Separate component for editing block props:
import { BlockProperties } from './blocks/BlockProperties';