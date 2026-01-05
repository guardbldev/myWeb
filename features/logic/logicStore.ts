import create from 'zustand';
import produce from 'immer';
import { BlockBase, BlockConnection } from './blocks/BlockTypes';

interface LogicState {
  blocks: BlockBase[];
  connections: BlockConnection[];
  variables: Record<string,string>;
  history: { blocks: BlockBase[], connections: BlockConnection[] }[];
  historyIdx: number;
  addBlock: (block: BlockBase) => void;
  connect: (from: string, to: string) => void;
  removeBlock: (id: string) => void;
  updateBlock: (id: string, data: Partial<BlockBase['data']>) => void;
  setVariable: (key: string, value: string) => void;
  undo: () => void;
  redo: () => void;
}

export const useLogicStore = create<LogicState>((set, get) => ({
  blocks: [],
  connections: [],
  variables: {},
  history: [],
  historyIdx: -1,
  addBlock: (block) =>
    set(produce((state: LogicState) => {
      state.blocks.push(block);
      // Save to history for undo
      state.history.push({ blocks: [...state.blocks], connections: [...state.connections] });
      state.historyIdx++;
    })),
  connect: (from, to) =>
    set(produce(state => {
      state.connections.push({ source: from, target: to });
    })),
  removeBlock: (id) =>
    set(produce(state => {
      state.blocks = state.blocks.filter(b => b.id !== id);
      state.connections = state.connections.filter(c => c.source !== id && c.target !== id);
    })),
  updateBlock: (id, data) =>
    set(produce(state => {
      const block = state.blocks.find(b => b.id === id);
      if (block) block.data = { ...block.data, ...data };
    })),
  setVariable: (key, value) =>
    set(produce(state => {
      state.variables[key] = value;
    })),
  undo: () => set(produce(state => {
    if (state.historyIdx > 0) {
      state.historyIdx--;
      const h = state.history[state.historyIdx];
      state.blocks = [...h.blocks];
      state.connections = [...h.connections];
    }
  })),
  redo: () => set(produce(state => {
    if (state.historyIdx < state.history.length-1) {
      state.historyIdx++;
      const h = state.history[state.historyIdx];
      state.blocks = [...h.blocks];
      state.connections = [...h.connections];
    }
  })),
}));