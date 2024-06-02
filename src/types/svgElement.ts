import { SvgTextElement, isSvgTextElement } from "./svgTextElement";
import { SvgImgElement, isSvgImgElement } from "./svgImgElement";

export type SvgElement = SvgTextElement | SvgImgElement & {
    position: "top left" | "top center" | "top right" | "right center" | "right bottom" | "center bottom" | "left bottom" | "left center" | "center center"
}

export const isSvgElement = (element: any): element is SvgElement => {
    if (typeof element !== "object") return false
    if (![isSvgImgElement(element), isSvgTextElement(element)].includes(true)) return false
    return true
}