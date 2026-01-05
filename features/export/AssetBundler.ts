export function bundleAssets(files: FileItem[]) {
  // Deduplicate, compress, etc.
  // For each asset (images/fonts/icons), optimize and collect in /assets/
  const assets = files.filter(f => ['img', 'svg', 'png', 'woff', 'ttf', 'otf'].some(ext => f.name.endsWith(ext)));
  // For demo: just path list
  return assets.map(a => ({ name: a.name, path: "assets/" + a.name }));
}