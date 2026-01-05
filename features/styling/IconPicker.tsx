import React from 'react';
import { FaRocket, FaArrowRight, FaCheck, FaGithub } from 'react-icons/fa';
import { Home, User, Settings } from 'lucide-react';

const ICONS = [
  <FaRocket />, <FaArrowRight />, <FaCheck />, <FaGithub />,
  <Home />, <User />, <Settings />
];

export default function IconPicker({ onSelect }:{ onSelect:(icon: any)=>void }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {ICONS.map((icon,i)=>(
        <button key={i} className="p-3 rounded hover:bg-indigo-100"
          onClick={()=>onSelect(icon)}>{icon}</button>
      ))}
    </div>
  );
}