import { AnimatableAttributeValue, animatableAttributes } from "@/data/animatableAttributes";
import { isSvgCircleElement } from "@/types/svgCircleElement";
import { SvgElement } from "@/types/svgElement"
import { isSvgImgElement } from "@/types/svgImgElement";
import { isSvgPatternElement } from "@/types/svgPatternElement";
import { isSvgRectangleElement } from "@/types/svgRectangleElement";
import { isSvgTextElement } from "@/types/svgTextElement";

export const getAnimatableAttributes = (element: SvgElement) => {
    let animAttr: AnimatableAttributeValue[] = [];
    if (isSvgCircleElement(element)) {
        animAttr = animatableAttributes["circle"];
    } else if (isSvgImgElement(element)) {
        animAttr = animatableAttributes["img"];
    } else if (isSvgTextElement(element)) {
        animAttr = animatableAttributes["text"];
    } else if (isSvgPatternElement(element)) {
        animAttr = animatableAttributes["pattern"];
    } else if (isSvgRectangleElement(element)) {
        animAttr = animatableAttributes["rectangle"];
    }
    return animAttr
}