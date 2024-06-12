import { SvgElement } from "@/types/svgElement";

export const changeElementPosition = (element: SvgElement, elements: SvgElement[], shift: number) => {
    const newElements = [...elements]
    const elementIndex = newElements.findIndex(val => val.index === element.index)
    if (elementIndex < 0 || shift === 0) return newElements
    newElements.splice(elementIndex + shift, 0, newElements.splice(elementIndex, 1)[0])
    return newElements
}