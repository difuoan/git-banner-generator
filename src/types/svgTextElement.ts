import { Font } from "./fonts";
import { SvgBaseElement } from "./svgBaseElement";

export type SvgTextElement = {
    text: string;
    color: string;
    fontSize: number
    fontFamily: Font
    x: number
    y: number
    dx?: number,
    dy?: number
} & SvgBaseElement;

export const isSvgTextElement = (element: any): element is SvgTextElement => {
    if (typeof element !== "object") return false;
    if (
        ![
            "x" in element,
            typeof element.x === "number",
            "y" in element,
            typeof element.y === "number",
            "text" in element,
            typeof element.text === "string",
            "color" in element,
            typeof element.color === "string",
            "fontFamily" in element,
            typeof element.fontFamily === "string",
            "fontSize" in element,
            typeof element.fontSize === "number",
        ].every((val) => val === true)
    )
        return false;
    return true;
};
