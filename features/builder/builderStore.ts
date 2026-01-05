import create from "zustand";
import { v4 as uuid } from "uuid";
import { UI_BLOCKS } from "../uikit/UIBlocksLibrary";

export const useBuilderStore = create((set, get) => ({
  components: [],
  addComponent: (blockId, pos) => {
    const block = UI_BLOCKS.find((b) => b.id === blockId);
    if (block)
      set((state) => ({
        components: [
          ...state.components,
          {
            id: uuid(),
            ...block,
            x: pos.x,
            y: pos.y,
            render: () => <div>{block.name}</div>,
          },
        ],
      }));
  },
  selectComponent: (id) =>
    set((state) => ({
      components: state.components.map((c) =>
        c.id === id ? { ...c, selected: true } : { ...c, selected: false }
      ),
    })),
}));