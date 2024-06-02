export type SvgTextElement = {
    "font-size": string
    text: string
}

export const isSvgTextElement = (element: any): element is SvgTextElement => {
    if (typeof element !== "object") return false
    if (!["font-size" in element, "text" in element].every((val) => val === true)) return false
    return true
}