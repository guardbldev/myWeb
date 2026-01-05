import { BlockBase, BlockConnection } from './BlockTypes';
import axios from 'axios';

// Traverses and executes blocks visually chained (DFS/BFS)
export async function runScript(blocks: BlockBase[], connections: BlockConnection[], triggerId: string, ctx: any) {
  let output: any[] = [];
  // Simple BFS/DFS
  let queue = [triggerId];
  const visited = new Set<string>();
  while (queue.length) {
    const id = queue.shift()!;
    if (visited.has(id)) continue;
    visited.add(id);
    const block = blocks.find(b=>b.id===id);
    if (!block) continue;

    // ---- Block Execution Pyramid -----
    switch(block.type) {
      case "onClick":
        // Only triggers, don't do anything here.
        break;
      case "if":
        // eval: block.data.condition, e.g. variable < 5, etc.
        if(evalCondition(block.data.condition, ctx)) {
          enqueueFrom(id);
        }
        break;
      case "else":
        // Run if prev failed (handled via graph logic)
        enqueueFrom(id);
        break;
      case "setVariable":
        ctx.variables[block.data.name] = block.data.value;
        enqueueFrom(id);
        break;
      case "getVariable":
        output.push(ctx.variables[block.data.name]);
        enqueueFrom(id);
        break;
      case "submitForm":
        // simulate or find form/submit
        enqueueFrom(id);
        break;
      case "apiRequest":
        // Await axios
        try {
          const res = await axios({ method: block.data.method, url: block.data.url, data: block.data.body });
          output.push(res.data);
        } catch(e) {
          output.push({ error: e.message });
        }
        enqueueFrom(id);
        break;
      case "showComponent":
        // Find selector, set visible (requires DOM-binding)
        enqueueFrom(id);
        break;
      case "hideComponent":
        // Find selector, set hidden (requires DOM-binding)
        enqueueFrom(id);
        break;
      case "navigatePage":
        // window.location or page routing
        enqueueFrom(id);
        break;
      case "bindData":
        // Map variable to component
        enqueueFrom(id);
        break;
      case "auth":
        // Run login/logout via auth system
        enqueueFrom(id);
        break;
      case "animate":
        // Trigger CSS animation on selector
        enqueueFrom(id);
        break;
      case "loop":
        for(let i=0; i<block.data.count; ++i) enqueueFrom(id);
        break;
      case "localStorage":
        if(block.data.action === "set") localStorage.setItem(block.data.key, block.data.value);
        else if(block.data.action==="get") output.push(localStorage.getItem(block.data.key));
        enqueueFrom(id);
        break;
      case "delay":
        await new Promise(r=>setTimeout(r, block.data.ms));
        enqueueFrom(id);
        break;
      case "timer":
        setTimeout(()=>enqueueFrom(id), block.data.ms);
        break;
      case "catchError":
        // Wrap next in try/catch
        enqueueFrom(id);
        break;
      case "log":
        console.log(block.data.value);
        enqueueFrom(id);
        break;
    }
  }
  function enqueueFrom(id: string) {
    connections.filter(c => c.source === id)
      .forEach(c => queue.push(c.target));
  }
  function evalCondition(cond: string, ctx: any) {
    try {
      // VERY basic eval, safer parser preferred!
      // eslint-disable-next-line
      return Function("variables", "return "+cond)(ctx.variables);
    } catch(e) {
      return false;
    }
  }
  return output;
}