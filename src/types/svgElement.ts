import { SvgTextElement, isSvgTextElement } from "./svgTextElement";
import { SvgImgElement, isSvgImgElement } from "./svgImgElement";

export type SvgElement = (SvgTextElement | SvgImgElement) & {
    index: number
    style: string
}

export const isSvgElement = (element: any): element is SvgElement => {
    if (typeof element !== "object") return false
    if (![isSvgImgElement(element), isSvgTextElement(element)].includes(true)) return false
    return true
}