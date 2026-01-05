// When user changes a visual element/properties, e.g. changes text, style, etc:
import { useFilesStore } from './filesStore';
function visualToCode(componentId: string, newProps: any) {
  const code = `<div style="color:${newProps.color}">${newProps.text}</div>`;
  // Find code file, update code
  useFilesStore.getState().updateCode(componentId, code);
}
// When code changes, update the visual (using a parser/render function)
function codeToVisual(code: string) {
  // Use DOM parser (DOMPurify, html-react-parser, etc)
  // Update visual component props/state
}