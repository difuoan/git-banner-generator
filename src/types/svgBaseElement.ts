import { SvgAnimation } from "./svgAnimation"

export type SvgBaseElement = {
    index: number
    name?: string
    animations?: SvgAnimation[]
    rotation?: number
    skewX?: number
    skewY?: number
    rotationOffsetX?: number
    rotationOffsetY?: number
}