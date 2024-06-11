import { splines } from "@/data/splines";
import { SvgAnimation } from "@/types/svgAnimation";
import { isSvgCircleElement } from "@/types/svgCircleElement";
import { SvgElement } from "@/types/svgElement";
import { isSvgTextElement } from "@/types/svgTextElement";

export const mapSvgAnimation = (
  animation: SvgAnimation,
  animationIndex: number,
  element: SvgElement,
  _elementIndex: number
) => {
  if (isSvgTextElement(element)) return;
  if (["rotate", "skewX", "skewY"].includes(animation.attributeName)) {
    let x = 0;
    let y = 0;
    if (isSvgCircleElement(element)) {
      x = (element.x ?? 0) + (element.r ?? 0);
      y = (element.y ?? 0) + (element.r ?? 0);
    } else {
      x = (element.x ?? 0) + (element.width ?? 0) / 2;
      y = (element.y ?? 0) + (element.height ?? 0) / 2;
    }
    return (
      <animateTransform
        key={animationIndex}
        attributeName="transform"
        from={`${animation.from} ${x} ${y}`}
        to={`${animation.to} ${x} ${y}`}
        dur={animation.dur + "s"}
        begin={animation.begin + "s"}
        type={animation.attributeName}
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
      attributeName={animation.attributeName}
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
