import React from 'react';
import { useFilesStore, FileItem } from './filesStore';
import { FaFolder, FaFileCode, FaFileAlt, FaCodeBranch } from 'react-icons/fa';

function FileNode({ file, depth }: { file: FileItem; depth?: number }) {
  const store = useFilesStore();
  const isFolder = file.type === "folder";
  const icon = isFolder ? <FaFolder /> :
    file.type === "css" ? <FaFileAlt /> :
    file.type === "serverless" ? <FaCodeBranch /> : <FaFileCode />;
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ marginLeft: (depth || 0)*18 }}>
      <div className="flex items-center gap-1 py-1 cursor-pointer hover:bg-gray-100 rounded"
        onClick={()=>isFolder ? setOpen(v=>!v) : store.openFile(file.id)}>
        <span>{icon}</span>
        <span className="font-medium">{file.name}</span>
        {isFolder && <span>{open ? "▼" : "▶"}</span>}
      </div>
      {isFolder && open && file.children && (
        <div>
          {file.children.map(child => <FileNode file={child} depth={((depth||0)+1)} key={child.id} />)}
        </div>
      )}
    </div>
  );
}

export default function FileExplorer() {
  const store = useFilesStore();
  return (
    <div className="w-64 bg-white border-r min-h-full overflow-y-auto p-3">
      <div className="text-xs font-bold uppercase mb-2 text-gray-500">File Manager</div>
      {store.tree.map(file => <FileNode file={file} key={file.id} />)}
    </div>
  )
}