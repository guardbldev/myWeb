import { useHotkeys } from "react-hotkeys-hook";
import { useCanvasEditor } from '../../hooks/useCanvasEditor';
export default function Shortcuts() {
  const { undo, redo, save } = useCanvasEditor();
  useHotkeys('ctrl+z', undo);
  useHotkeys('ctrl+shift+z', redo);
  useHotkeys('ctrl+s', (e) => { e.preventDefault(); save(); }, { enableOnTags: ['INPUT','TEXTAREA'] });
  // Add more: delete, duplicate, select all
  useHotkeys('del', () => {/*delete selected*/});
  useHotkeys('ctrl+d', () => {/*duplicate*/});
  useHotkeys('ctrl+a', () => {/*select all*/});
  return null;
}