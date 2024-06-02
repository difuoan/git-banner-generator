export type SvgTextElement = {
    text: string
}

export const isSvgTextElement = (element: any): element is SvgTextElement => {
    if (typeof element !== "object") return false
    if (!["text" in element].every((val) => val === true)) return false
    return true
}