import { saveAs } from "file-saver";
import { FileItem } from "../code/filesStore";

export function exportSitemap(filesStore:any) {
  const files = gatherAllFiles(filesStore.tree);
  let pages = files.filter(f => f.name.endsWith(".html")).map(f => f.name.replace(".html", ""));
  let xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    pages.map(page => `<url><loc>/${page}</loc></url>`).join('') +
    `</urlset>`;
  const blob = new Blob([xml], { type: "application/xml" });
  saveAs(blob, "sitemap.xml");
}
function gatherAllFiles(tree: FileItem[]): FileItem[] {
  let out: FileItem[] = [];
  for (let file of tree) {
    if (file.type === "folder" && file.children) {
      out.push(...gatherAllFiles(file.children));
    } else {
      out.push(file);
    }
  }
  return out;
}