import { splines } from "@/data/splines";
import { SvgAnimation } from "@/types/svgAnimation";
import { SvgTextElement } from "@/types/svgTextElement";

export const mapSvgTextAnimation = (
  animation: SvgAnimation,
  animationIndex: number,
  element: SvgTextElement,
  _elementIndex: number,
  textIndex: number
) => {
  if (["rotate", "skewX", "skewY"].includes(animation.attributeName)) return;
  let from = animation.from;
  let to = animation.to;
  if ("dx" === animation.attributeName) {
    from = (animation.from ?? 0) * textIndex;
    to = (animation.to ?? 0) * textIndex;
  } else if ("dy" === animation.attributeName) {
    from = (animation.from ?? element.fontSize * 1.4) * textIndex;
    to = (animation.to ?? element.fontSize * 1.4) * textIndex;
  }
  return (
    <animate
      key={animationIndex}
      attributeName={animation.attributeName}
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
