import { splines } from "@/data/splines";
import { SvgAnimation } from "@/types/svgAnimation";
import { SvgElement } from "@/types/svgElement";
import { isSvgTextElement } from "@/types/svgTextElement";

export const mapSvgTextGroupAnimation = (
  animation: SvgAnimation,
  animationIndex: number,
  element: SvgElement,
  _elementIndex: number
) => {
  if (!["rotate", "skewX", "skewY"].includes(animation.attributeName)) return;
  let transformSuffix: string = "";
  if (animation.attributeName === "rotate") {
    transformSuffix += `  ${element.x + (element.rotationOffsetX ?? 0)} ${
      element.y + (element.rotationOffsetY ?? 0)
    }`;
  }
  return (
    <animateTransform
      key={animationIndex}
      attributeName="transform"
      type={animation.attributeName}
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
