import { SvgImgElement, isSvgImgElement } from "./svgImgElement"
import { SvgAnimation } from "./svgAnimation"

export type SvgElement = {
    index: number
    name?: string
    x?: number
    y?: number
    animations?: SvgAnimation[]
} & SvgImgElement

export const isSvgElement = (element: any): element is SvgElement => {
    if (typeof element !== "object") return false
    if (!["index" in element, typeof element.index === "number",].every((val) => val === true)) return false;
    if (![isSvgImgElement(element)].includes(true)) return false
    return true
}