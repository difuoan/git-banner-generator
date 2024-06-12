import { AnimatableAttributeValue } from "@/data/animatableAttributes";
import { splines } from "@/data/splines";
import { SvgAnimation } from "@/types/svgAnimation";
import { SvgTextElement } from "@/types/svgTextElement";
import { getAnimatableAttributes } from "../getAnimatableAttributes";

export const mapSvgTextAnimation = (
  animation: SvgAnimation,
  animationIndex: number,
  element: SvgTextElement,
  _elementIndex: number,
  textIndex: number
) => {
  let animAttr: AnimatableAttributeValue[] = getAnimatableAttributes(element);
  const attibuteNameToUse =
    animAttr.find((val) => val.text === animation.attributeName)?.value ?? "";
  if (["rotate", "skewX", "skewY"].includes(attibuteNameToUse)) return;
  let from = animation.from;
  let to = animation.to;
  if ("dx" === attibuteNameToUse) {
    from = (animation.from ?? 0) * textIndex;
    to = (animation.to ?? 0) * textIndex;
  } else if ("dy" === attibuteNameToUse) {
    from = (animation.from ?? element.fontSize * 1.4) * textIndex;
    to = (animation.to ?? element.fontSize * 1.4) * textIndex;
  }
  return (
    <animate
      key={animationIndex}
      attributeName={attibuteNameToUse}
      from={from}
      to={to}
      dur={animation.dur + "s"}
      begin={animation.begin + "s"}
      repeatCount={animation.repeatCount}
      calcMode="spline"
      keyTimes="0; 1"
      keySplines={splines[animation.keySplines]}
    />
  );
};
