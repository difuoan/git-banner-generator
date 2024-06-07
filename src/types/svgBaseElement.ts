import { SvgAnimation } from "./svgAnimation"

export type SvgBaseElement = {
    index: number
    name?: string
    x: number
    y: number
    animations?: SvgAnimation[]
}