import { splines } from "@/data/splines";
import { SvgAnimation } from "@/types/svgAnimation";

export const mapSvgAnimation = (animation: SvgAnimation, index: number) => {
  return (
    <animate
      key={index}
      attributeName={animation?.attributeName}
      from={animation?.from}
      to={animation?.to}
      dur={animation?.dur + "s"}
      begin={animation?.begin + "s"}
      repeatCount={animation?.repeatCount}
      calcMode="spline"
      keyTimes="0; 1"
      keySplines={splines[animation?.keySplines]}
    />
  );
};
