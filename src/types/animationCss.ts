import { AnimationName } from "./animations"

export type AnimationCss = {
    [name in AnimationName]: string
}