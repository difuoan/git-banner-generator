import { SvgBaseElement } from "./svgBaseElement";

export type SvgTextElement = {
    text: string;
    color: string;
    fontSize: number
    fontFamily: string
} & SvgBaseElement;

export const isSvgTextElement = (element: any): element is SvgTextElement => {
    if (typeof element !== "object") return false;
    if (
        ![
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
