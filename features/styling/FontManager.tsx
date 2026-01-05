import React, { useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';

const fonts = ['Roboto', 'Montserrat', 'Open Sans', 'Lato', 'Poppins'];

export default function FontManager({ font, setFont }: { font: string, setFont: (name: string)=>void }) {
  const [uploaded, setUploaded] = useState<string[]>([]);
  return (
    <div>
      <GoogleFontLoader fonts={fonts.map(f=>({font:f,weights:[400,700]}))}/>
      <div>Google Fonts:</div>
      <div className="grid grid-cols-2 gap-2">
        {fonts.map(name=>(
          <button key={name} className={`px-2 py-1 rounded font-sans`}
            style={{fontFamily:name}} onClick={()=>setFont(name)}>{name}</button>
        ))}
      </div>
      <div className="mt-3">Upload Font File:</div>
      <input type="file" accept=".woff,.ttf,.otf"
        onChange={e=>{
          if(e.target.files&&e.target.files.length){
            const url=URL.createObjectURL(e.target.files[0]);
            setUploaded([...uploaded,url]);
            setFont(url); // apply
          }
        }} />
      {uploaded.map(url=>(
        <span className="bg-gray-200 rounded p-2 mt-2 font-sans" style={{fontFamily:`url(${url})`}}>Uploaded</span>
      ))}
    </div>
  );
}