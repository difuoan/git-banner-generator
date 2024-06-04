import { SvgTextElement, isSvgTextElement } from "./svgTextElement";
import { SvgImgElement, isSvgImgElement } from "./svgImgElement";
import { AnimationName } from "./animations";

export type SvgElement = (SvgTextElement | SvgImgElement) & {
    index: number
    style: string
    animation?: AnimationName,
    animationCss?: string
    name?: string
}

export const isSvgElement = (element: any): element is SvgElement => {
    if (typeof element !== "object") return false
    if (![isSvgImgElement(element), isSvgTextElement(element)].includes(true)) return false
    return true
}