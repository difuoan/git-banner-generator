import { Spline } from "@/data/splines"
import { isSvgImgElement } from "./svgImgElement"

export type AnimatableAttribute = "x" | "y"

export type SvgAnimation = {
    attributeName: AnimatableAttribute
    from: number
    to: number
    dur: number
    begin: number
    repeatCount: number | "indefinite"
    keySplines: Spline
}

export type SvgElement = {
    src?: string
    index: number
    name?: string
    x?: number
    y?: number
    animations?: SvgAnimation[]
}

export const isSvgElement = (element: any): element is SvgElement => {
    if (typeof element !== "object") return false
    if (![isSvgImgElement(element)].includes(true)) return false
    return true
}