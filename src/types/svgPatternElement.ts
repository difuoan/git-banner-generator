import { SvgBaseElement } from "./svgBaseElement";

export type SvgPatternElement = SvgBaseElement & {
    isPattern: true;
    src: string;
    width: number;
    height: number;
    x: number;
    y: number;
    rx: number;
    ry: number;
    initialWidth: number;
    initialHeight: number;
};

export const isSvgPatternElement = (element: any): element is SvgPatternElement => {
    if (typeof element !== "object") return false;
    if (
        ![
            "isPattern" in element,
            typeof element.isPattern === "boolean",
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
