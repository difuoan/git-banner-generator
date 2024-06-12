import { AnimatableAttributeValue } from "@/data/animatableAttributes";
import { splines } from "@/data/splines";
import { SvgAnimation } from "@/types/svgAnimation";
import { isSvgCircleElement } from "@/types/svgCircleElement";
import { SvgElement } from "@/types/svgElement";
import { isSvgTextElement } from "@/types/svgTextElement";
import { getAnimatableAttributes } from "../getAnimatableAttributes";

export const mapSvgAnimation = (
  animation: SvgAnimation,
  animationIndex: number,
  element: SvgElement,
  _elementIndex: number
) => {
  if (isSvgTextElement(element)) return;
  let animAttr: AnimatableAttributeValue[] = getAnimatableAttributes(element);
  const attibuteNameToUse =
    animAttr.find((val) => val.text === animation.attributeName)?.value ?? "";
  if (["rotate", "skewX", "skewY"].includes(attibuteNameToUse)) {
    let x = 0;
    let y = 0;
    if (isSvgCircleElement(element)) {
      x = (element.x ?? 0) + (element.r ?? 0);
      y = (element.y ?? 0) + (element.r ?? 0);
    } else {
      x = (element.x ?? 0) + (element.width ?? 0) / 2;
      y = (element.y ?? 0) + (element.height ?? 0) / 2;
    }
    let from: string = animation.from.toString();
    let to: string = animation.to.toString();
    if (attibuteNameToUse === "rotate") {
      from += ` ${x} ${y}`;
      to += ` ${x} ${y}`;
    }
    return (
      <animateTransform
        key={animationIndex}
        attributeName="transform"
        from={from}
        to={to}
        dur={animation.dur + "s"}
        begin={animation.begin + "s"}
        type={attibuteNameToUse}
        attributeType="XML"
        repeatCount={animation.repeatCount}
        calcMode="spline"
        keyTimes="0; 1"
        keySplines={splines[animation.keySplines]}
        additive="sum"
      />
    );
  }
  return (
    <animate
      key={animationIndex}
      attributeName={attibuteNameToUse}
      from={animation.from}
      to={animation.to}
      dur={animation.dur + "s"}
      begin={animation.begin + "s"}
      repeatCount={animation.repeatCount}
      calcMode="spline"
      keyTimes="0; 1"
      keySplines={splines[animation.keySplines]}
    />
  );
};
