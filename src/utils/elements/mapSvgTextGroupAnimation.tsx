import { splines } from "@/data/splines";
import { SvgAnimation } from "@/types/svgAnimation";

export const mapSvgTextGroupAnimation = (
  animation: SvgAnimation,
  animationIndex: number
) => {
  if (!["rotate", "skewX", "skewY"].includes(animation.attributeName)) return;
  return (
    <animateTransform
      key={animationIndex}
      attributeName="transform"
      type={animation.attributeName}
      attributeType="XML"
      from={animation.from}
      to={animation.to}
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
