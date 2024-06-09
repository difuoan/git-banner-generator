import { SvgBaseElement } from "./svgBaseElement";

export type SvgCircleElement = {
    x: number;
    y: number;
    r: number;
    fill: string;
} & SvgBaseElement;

export const isSvgCircleElement = (
    element: any
): element is SvgCircleElement => {
    if (typeof element !== "object") return false;
    if (
        ![
            "x" in element,
            typeof element.x === "number",
            "y" in element,
            typeof element.y === "number",
            "r" in element,
            typeof element.r === "number",
            "fill" in element,
            typeof element.fill === "string",
        ].every((val) => val === true)
    )
        return false;
    return true;
};
