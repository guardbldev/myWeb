import React, { useRef } from 'react';
import { useCanvasEditor } from '../../../hooks/useCanvasEditor';

export default function Assets() {
  const fileInput = useRef<HTMLInputElement>(null);
  const { addElement } = useCanvasEditor();

  function onDropImage(files: FileList) {
    // TODO: load preview, upload image, then add to canvas as element
  }

  return (
    <div>
      <div className="font-bold mb-2">Assets</div>
      <button onClick={() => fileInput.current?.click()}>Upload</button>
      <input type="file" ref={fileInput} className="hidden"
        accept="image/*" onChange={e=>onDropImage(e.target.files!)} multiple />
      {/* Thumbnails - click to add to canvas */}
      <div className="grid grid-cols-3 gap-1 mt-3">
        {/* map images */}
        {/* <img src="..." onClick={()=>addElement({type:'image'})} ... /> */}
      </div>
    </div>
  );
}