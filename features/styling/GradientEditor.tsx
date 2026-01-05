import React, { useState } from 'react';
export default function GradientEditor({ value, onChange }:{ value: string, onChange:(v:string)=>void }) {
  const [gradient, setGradient] = useState(value);
  const colors = ["#2563EB", "#F472B6"];
  function handleGradientChange(index:number, color:string){
    const newColors = [...colors];
    newColors[index]=color;
    const grad = `linear-gradient(90deg,${newColors.join(',')})`;
    setGradient(grad); onChange(grad);
  }
  return (
    <div>
      <div className="flex gap-2">
        {colors.map((c,i)=>(
          <input key={i} type="color" value={c}
            onChange={e=>handleGradientChange(i,e.target.value)}/>
        ))}
      </div>
      <div className="mt-2 text-xs font-mono">{gradient}</div>
    </div>
  );
}