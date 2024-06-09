import { SvgBaseElement } from "./svgBaseElement";

export type SvgRectangleElement = {
    width: number;
    height: number;
    fill: string;
    x: number;
    y: number;
    rx: number;
    ry: number;
} & SvgBaseElement;

export const isSvgRectangleElement = (element: any): element is SvgRectangleElement => {
    if (typeof element !== "object") return false;
    if (
        ![
            "fill" in element,
            typeof element.fill === "string",
            "x" in element,
            typeof element.x === "number",
            "y" in element,
            typeof element.y === "number",
            "width" in element,
            typeof element.width === "number",
            "height" in element,
            typeof element.height === "number",
            "rx" in element,
            typeof element.rx === "number",
            "ry" in element,
            typeof element.ry === "number",
        ].every((val) => val === true)
    )
        return false;
    return true;
};
