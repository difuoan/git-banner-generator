import { SvgElement } from "./svgElement";

export type HistoryElement = {
    width: number;
    height: number;
    elements: SvgElement[];
};

export const isHistoryElement = (element: any): element is HistoryElement => {
    if (typeof element !== "object") return false;
    if (
        ![
            "width" in element,
            "height" in element,
            "elements" in element,
            typeof element.elements === "object",
            typeof element.width === "number",
            typeof element.height === "number",
        ].every((val) => val === true)
    )
        return false;
    return true;
};
