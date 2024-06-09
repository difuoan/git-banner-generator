import { SvgBaseElement } from "./svgBaseElement";

export type SvgCircleElement = {
    cx: number;
    cy: number;
    r: number;
    fill: string;
} & SvgBaseElement;

export const isSvgCircleElement = (
    element: any
): element is SvgCircleElement => {
    if (typeof element !== "object") return false;
    if (
        ![
            "cx" in element,
            typeof element.cx === "number",
            "cy" in element,
            typeof element.cy === "number",
            "r" in element,
            typeof element.r === "number",
            "fill" in element,
            typeof element.fill === "string",
        ].every((val) => val === true)
    )
        return false;
    return true;
};
