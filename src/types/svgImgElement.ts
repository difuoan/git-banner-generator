import { SvgBaseElement } from "./svgBaseElement";

export type SvgImgElement = {
  src: string;
  width?: number;
  height?: number;
  x: number;
  y: number;
} & SvgBaseElement;

export const isSvgImgElement = (element: any): element is SvgImgElement => {
  if (typeof element !== "object") return false;
  if (
    ![
      "src" in element,
      typeof element.src === "string",
      "x" in element,
      typeof element.x === "number",
      "y" in element,
      typeof element.y === "number",
    ].every((val) => val === true)
  )
    return false;
  return true;
};
