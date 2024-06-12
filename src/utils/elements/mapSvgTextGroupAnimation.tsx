import { AnimatableAttributeValue } from "@/data/animatableAttributes";
import { splines } from "@/data/splines";
import { SvgAnimation } from "@/types/svgAnimation";
import { SvgElement } from "@/types/svgElement";
import { getAnimatableAttributes } from "../getAnimatableAttributes";

export const mapSvgTextGroupAnimation = (
  animation: SvgAnimation,
  animationIndex: number,
  element: SvgElement,
  _elementIndex: number
) => {
  let animAttr: AnimatableAttributeValue[] = getAnimatableAttributes(element);
  const attibuteNameToUse =
    animAttr.find((val) => val.text === animation.attributeName)?.value ?? "";
  if (!["rotate", "skewX", "skewY"].includes(attibuteNameToUse)) return;
  let transformSuffix: string = "";
  if (attibuteNameToUse === "rotate") {
    transformSuffix += `  ${element.x + (element.rotationOffsetX ?? 0)} ${
      element.y + (element.rotationOffsetY ?? 0)
    }`;
  }
  return (
    <animateTransform
      key={animationIndex}
      attributeName="transform"
      type={attibuteNameToUse}
      attributeType="XML"
      from={`${animation.from}${transformSuffix}`}
      to={`${animation.to}${transformSuffix}`}
      dur={animation.dur + "s"}
      begin={animation.begin + "s"}
      repeatCount={animation.repeatCount}
      calcMode="spline"
      keyTimes="0; 1"
      keySplines={splines[animation.keySplines]}
      additive="sum"
    />
  );
};
