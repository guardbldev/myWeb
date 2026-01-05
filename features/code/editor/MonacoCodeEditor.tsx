// ...in the component
import { autoFormatCode, lintCode } from './lint';
const editorRef = useRef<any>(null);
function format() {
  if(editorRef.current){
    editorRef.current.setValue(
      autoFormatCode(editorRef.current.getValue())
    );
  }
}
function lintShow() {
  if(editorRef.current){
    lintCode(editorRef.current.getValue()).then(results=>{
      alert(JSON.stringify(results));
    });
  }
}