import React, { useState } from 'react';

export default function TimelineAnimationEditor({ elementId, selected }: { elementId: string, selected: any }) {
  // Timeline with draggable keyframes, framer-motion for animation
  const [keyframes, setKeyframes] = useState(
    selected.animations?.keyframes || [{ t:0, prop:"opacity", value:1 }]
  );
  const [scrollAnimation, setScrollAnimation] = useState(selected.animations?.scroll || false);

  return (
    <div className="mt-2">
      <div>
        <label>Keyframes</label>
        <div className="flex gap-2">
          {keyframes.map((kf,i)=>(
            <div key={i} className="border p-2 rounded flex flex-col items-center">
              <span>Time: {kf.t} ms</span>
              <span>{kf.prop}: {kf.value}</span>
              <button onClick={()=>{/* Remove */}}>✕</button>
            </div>
          ))}
          <button className="px-2 py-1 bg-green-300 rounded" onClick={()=>{
            setKeyframes([...keyframes,{t:500,prop:"opacity",value:.5}]);
          }}>+ Add</button>
        </div>
      </div>
      <div className="mt-2 flex gap-4 items-center">
        <label className="font-bold">Scroll Animation</label>
        <input type="checkbox" checked={scrollAnimation}
          onChange={e=>setScrollAnimation(e.target.checked)}/>
      </div>
    </div>
  );
}