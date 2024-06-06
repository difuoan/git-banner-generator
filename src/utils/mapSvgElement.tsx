import { splines } from "@/data/splines";
import { SvgAnimation, SvgElement } from "@/types/svgElement";
import { isSvgImgElement } from "@/types/svgImgElement";

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

export const mapSvgElement = (element: SvgElement, index: number) => {
  const mappedAnimations = (element.animations ?? []).map(mapSvgAnimation);
  if (isSvgImgElement(element)) {
    return (
      <image href={element.src} key={index} x={element.x} y={element.y}>
        {mappedAnimations}
      </image>
    );
  }
};
