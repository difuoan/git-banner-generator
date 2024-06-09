import { Spline, isSpline } from "@/data/splines"

export type SvgAnimation = {
    attributeName: string
    from: number
    to: number
    dur: number
    begin: number
    repeatCount: number
    keySplines: Spline
}

export const isSvgAnimation = (element: any): element is SvgAnimation => {
    if (typeof element !== "object") return false;
    if (
        ![
            "attributeName" in element,
            "from" in element,
            "to" in element,
            "dur" in element,
            "begin" in element,
            "repeatCount" in element,
            "keySplines" in element,
            typeof element.from === "number",
            typeof element.to === "number",
            typeof element.dur === "number",
            typeof element.begin === "number",
            typeof element.repeatCount === "number",
            isSpline(element.keySplines),
        ].every((val) => val === true)
    )
        return false;
    return true;
};
