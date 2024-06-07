import { HistoryElement, isHistoryElement } from "./history";

export type Preset = { src: string; } & HistoryElement



export const isPreset = (element: any): element is Preset => {
    if (typeof element !== "object") return false
    if (![isHistoryElement(element)].includes(true)) return false
    if (!["src" in element, typeof element.src === "string"].every((val) => val === true)) return false
    return true
}