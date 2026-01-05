export type BlockType =
  | "onClick"
  | "if"
  | "else"
  | "setVariable"
  | "getVariable"
  | "submitForm"
  | "apiRequest"
  | "showComponent"
  | "hideComponent"
  | "navigatePage"
  | "bindData"
  | "auth"
  | "animate"
  | "loop"
  | "localStorage"
  | "delay"
  | "timer"
  | "catchError"
  | "log"
  ;

export type BlockBase = {
  id: string;
  type: BlockType;
  label: string;
  position: { x: number; y: number };
  data: any; // per-type config
};

export interface BlockConnection {
  source: string;   // block id
  target: string;
}