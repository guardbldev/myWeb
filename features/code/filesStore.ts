import create from 'zustand';
import produce from 'immer';

export type FileType = "code" | "component" | "css" | "folder" | "serverless";
export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  code?: string;
  children?: FileItem[];   // for folders
  parentId?: string;
}
interface FilesState {
  tree: FileItem[];        // root level files/folders
  opened: string[];        // fileIds currently opened
  active: string | null;   // fileId for current editor
  createFile: (file: Partial<FileItem>, parentId?: string) => void;
  updateCode: (fileId: string, code:string) => void;
  rename: (fileId:string, name:string) => void;
  moveFile: (fileId:string, targetId:string) => void;
  deleteFile: (fileId:string) => void;
  openFile: (fileId:string) => void;
  closeFile: (fileId:string) => void;
}
export const useFilesStore = create<FilesState>((set,get)=>({
  tree: [
    { id: "src", name: "src", type:"folder", children: [
      { id:"index.html", name:"index.html", type:"code", code:"<html></html>" },
      { id:"App.js", name:"App.js", type:"code", code:"export default function App() { return <div>Hello</div>; }" },
      { id:"style.css", name:"style.css", type:"css", code:"body{background:#f4f4f4;}" },
      { id:"api.js", name:"api.js", type:"serverless", code:"module.exports={handler:()=>{}}" },
    ]},
  ],
  opened: [],
  active: null,
  createFile(file, parentId) {
    set(produce((state:FilesState)=>{
      function findFolder(node:FileItem[]):FileItem|null{
        for(let n of node){
          if(n.id===parentId) return n;
          if(n.type==="folder" && n.children){
            let res=findFolder(n.children); if(res)return res;
          }
        }
        return null;
      }
      let folder=parentId?findFolder(state.tree):null;
      let newFile={...file, id:file.name||"new-"+Date.now(), type:file.type||"code", code:file.code||""};
      if(folder && folder.children) folder.children.push(newFile);
      else state.tree.push(newFile);
    }));
  },
  updateCode(fileId, code){
    set(produce((state:FilesState)=>{
      function find(node:FileItem[]):FileItem|null{
        for(let n of node){
          if(n.id===fileId) return n;
          if(n.type==="folder" && n.children){
            let res=find(n.children); if(res)return res;
          }
        }
        return null;
      }
      let f=find(state.tree); if(f)f.code=code;
    }))
  },
  rename(fileId,name){
    set(produce((state:FilesState)=>{
      function find(node:FileItem[]):FileItem|null{
        for(let n of node){
          if(n.id===fileId) return n;
          if(n.children){let res=find(n.children);if(res)return res}
        }return null;
      }
      let f=find(state.tree);if(f)f.name=name;
    }))
  },
  moveFile(fileId,targetId){
    // Leave as stub for now, would need tree traversal and "drag"
  },
  deleteFile(fileId){
    // Stub, recursive remove
  },
  openFile(fileId){
    set(state=>({...state,opened:[...state.opened,fileId],active:fileId }));
  },
  closeFile(fileId){
    set(state=>({...state,opened:state.opened.filter(f=>f!==fileId) }));
  }
}));