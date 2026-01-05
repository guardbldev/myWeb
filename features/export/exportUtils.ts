export async function exportPWA(filesStore:any) {
  const zip = new JSZip();
  // Gather files as before
  const files = gatherAllFiles(filesStore.tree);
  for (let f of files) {
    zip.file(f.name, f.code || "");
  }
  zip.file('manifest.json', manifestFile);
  zip.file('sw.js', swFile);
  zip.generateAsync({ type: "blob" }).then((content) => {
    saveAs(content, "buildify-pwa.zip");
  });
}