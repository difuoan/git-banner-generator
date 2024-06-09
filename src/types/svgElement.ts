import { SvgCircleElement } from "./svgCircleElement"
import { SvgImgElement, isSvgImgElement } from "./svgImgElement"
import { SvgTextElement, isSvgTextElement } from "./svgTextElement"

export type SvgElement = SvgImgElement | SvgTextElement | SvgCircleElement

export const isSvgElement = (element: any): element is SvgElement => {
    if (typeof element !== "object") return false
    if (!["index" in element, typeof element.index === "number",].every((val) => val === true)) return false;
    if (![isSvgImgElement(element), isSvgTextElement(element)].includes(true)) return false
    return true
}