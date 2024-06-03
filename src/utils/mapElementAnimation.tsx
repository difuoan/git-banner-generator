import { aniamtionCSS } from "@/data/animationCss";
import { SvgElement } from "@/types/svgElement";
import { replaceData } from "./replaceData";

export const mapElementAnimation = (
  element: SvgElement,
  _index: number,
  svgHeight: number,
  svgWidth: number
) => {
  return replaceData(
    element["animationCss"] ?? aniamtionCSS[element.animation ?? "none"],
    element.index,
    svgHeight,
    svgWidth
  );
};
