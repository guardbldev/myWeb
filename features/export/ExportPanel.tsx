import React from "react";
import { exportStaticSite, exportSitemap, exportPWA } from "./exportUtils";

export default function ExportPanel({ onClose }) {
  return (
    <div className="rounded-3xl p-9 bg-white shadow-2xl w-[440px] mx-auto flex flex-col gap-4 items-center">
      <h2 className="font-bold text-2xl">Export / Output</h2>
      <button
        className="fancy-btn"
        onClick={() => exportStaticSite()}>
        Download Production HTML/CSS/JS
      </button>
      <button
        className="fancy-btn bg-green-500"
        onClick={() => exportSitemap()}>
        Generate sitemap.xml
      </button>
      <button
        className="fancy-btn bg-pink-500"
        onClick={() => exportPWA()}>
        Export as PWA
      </button>
      <button
        className="fancy-btn mt-4 bg-red-400"
        onClick={onClose}>
        Close
      </button>
    </div>
  );
}