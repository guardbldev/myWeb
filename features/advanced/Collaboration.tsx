import React, { useEffect, useRef } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

export default function Collaboration({ docId, onChange }: { docId: string, onChange: (state: any) => void }) {
  const ydocRef = useRef<any>(null);
  useEffect(() => {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider('wss://demos.yjs.dev', docId, ydoc);
    const yarray = ydoc.getArray('canvas');
    yarray.observe(e => {
      onChange(yarray.toArray())
    });
    ydocRef.current = ydoc;
    return ()=>provider.destroy();
  }, [docId, onChange]);
  // To update global state from editing,
  // .push changes to yarray -- sync across clients automatically
  return null;
}