import { downloadBlob } from "./downloadBlob";

export const downloadSvg = () => {
    const svgElement = document.getElementById("generated-banner");
    if (!svgElement) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    downloadBlob(blob, "svg")
};