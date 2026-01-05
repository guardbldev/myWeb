import { BlockType, BlockBase } from './BlockTypes';
import { v4 as uuid } from 'uuid';

export const BlockDefinitions: Record<BlockType, {
  label: string;
  color: string;
  description: string;
  initialData: any;
}> = {
  onClick:     { label: "When Clicked", color: "bg-blue-400", description: "Trigger on element click", initialData: { selector: "" }},
  if:          { label: "If Condition", color: "bg-yellow-300", description: "Conditionally run logic", initialData: { condition: "" }},
  else:        { label: "Else", color: "bg-orange-300", description: "Else branch", initialData: {} },
  setVariable: { label: "Set Variable", color: "bg-green-300", description: "Set a variable’s value", initialData: { name: "", value: "" }},
  getVariable: { label: "Get Variable", color: "bg-green-200", description: "Get a variable’s value", initialData: { name: "" }},
  submitForm:  { label: "Submit Form", color: "bg-indigo-400", description: "Form submission logic", initialData: { selector: "" }},
  apiRequest:  { label: "API Request", color: "bg-pink-400", description: "REST API fetch block", initialData: { method: "GET", url: "", headers: "", body: "" }},
  showComponent: { label: "Show Component", color: "bg-teal-400", description: "Show UI by selector", initialData: { selector: "" }},
  hideComponent: { label: "Hide Component", color: "bg-teal-300", description: "Hide UI by selector", initialData: { selector: "" }},
  navigatePage:  { label: "Go to Page", color: "bg-gray-400", description: "Navigate to a page", initialData: { page: "" }},
  bindData:      { label: "Bind Data", color: "bg-purple-300", description: "Bind state/data to component", initialData: { selector: "", variable: "" }},
  auth:          { label: "Auth Event", color: "bg-lime-400", description: "Login/logout logic", initialData: { action: "login" }},
  animate:       { label: "Trigger Animation", color: "bg-fuchsia-400", description: "Run a UI animation", initialData: { selector: "", animation: "" }},
  loop:          { label: "Loop", color: "bg-orange-400", description: "Foreach/repeat", initialData: { count: 3 }},
  localStorage:  { label: "Local Storage", color: "bg-yellow-500", description: "Read/write to browser storage", initialData: { action: "set", key: "", value: "" }},
  delay:         { label: "Delay/Wait", color: "bg-gray-300", description: "Pause flow for ms", initialData: { ms: 1000 }},
  timer:         { label: "Timer", color: "bg-gray-200", description: "Run after time", initialData: { ms: 5000 }},
  catchError:    { label: "Error Handling", color: "bg-red-400", description: "Catch and handle errors", initialData: {} },
  log:           { label: "Console Log", color: "bg-slate-300", description: "Log output to console", initialData: { value: "" }},
};

export function makeBlock(type: BlockType, pos?: {x:number,y:number}): BlockBase {
  return {
    id: uuid(),
    type,
    label: BlockDefinitions[type].label,
    position: pos || { x: 100, y: 100 },
    data: BlockDefinitions[type].initialData
  } as BlockBase
}