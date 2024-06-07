export type SvgImgElement = {
    src: string
}

export const isSvgImgElement = (element: any): element is SvgImgElement => {
    if (typeof element !== "object") return false
    if (!["src" in element, typeof element.src === "string"].every((val) => val === true)) return false
    return true
}