import { useState, useRef, useCallback } from 'react';
import create from 'zustand';
import produce from 'immer';
import { v4 as uuid } from 'uuid';

type CanvasElement = {
  id: string;
  type: 'text'|'image'|'box'|'component';
  x: number; y: number; w: number; h: number; z: number;
  locked: boolean;
  hidden: boolean;
  selected: boolean;
  editable: boolean;
  text?: string;
};

type SnapLine = { id: string, style: any };

interface CanvasState {
  elements: CanvasElement[];
  selection: string[];
  layers: { id: string, name: string, locked: boolean, hidden: boolean }[];
  snapLines: SnapLine[];
  selectionBox?: {x:number,y:number,w:number,h:number};
  zoom: number;
  // history/undo-redo
  history: CanvasElement[][];
  historyIndex: number;
  // methods
  addElement: (el: Partial<CanvasElement>)=>void;
  setSelection: (id: string)=>void;
  lockLayer: (id: string)=>void;
  hideLayer: (id: string)=>void;
  undo: ()=>void;
  redo: ()=>void;
  // ...and more (drag, drop, resize, etc)
}

export const useCanvasEditor = create<CanvasState>((set,get)=>({
  elements: [
    { id: uuid(), type: 'text', text: 'Build Your Dream Website', x:50, y:50, w:350, h:32, z:1, locked:false, hidden:false, selected:false, editable:false }
  ],
  selection: [],
  layers: [],
  snapLines: [],
  zoom: 1,
  history: [],
  historyIndex: -1,
  addElement(el) { set(state=>({elements: [...state.elements, {...el,id:uuid(), locked:false, hidden:false, selected:false, editable:false}] })) },
  setSelection(id) { set(state=>({selection: [id], elements: state.elements.map(e=>({...e, selected:e.id===id}))})); },
  lockLayer(id) { set(state=>({elements: state.elements.map(e=>e.id===id?{...e,locked:!e.locked}:e)})); },
  hideLayer(id) { set(state=>({elements: state.elements.map(e=>e.id===id?{...e,hidden:!e.hidden}:e)})); },
  undo() { /* ... */ },
  redo() { /* ... */ },
}));