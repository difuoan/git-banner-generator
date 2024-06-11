import { SvgElement } from "@/types/svgElement";
import { isSvgImgElement } from "@/types/svgImgElement";
import { mapSvgAnimation } from "./mapSvgAnimation";
import { mapSvgTextAnimation } from "./mapSvgTextAnimation";
import { isSvgTextElement } from "@/types/svgTextElement";
import { fontFamilies } from "@/types/fonts";
import { isSvgCircleElement } from "@/types/svgCircleElement";
import { testImg } from "@/data/testImg";
import { isSvgRectangleElement } from "@/types/svgRectangleElement";

export const mapSvgElement = (element: SvgElement, index: number) => {
  if (isSvgImgElement(element)) {
    let mappedAnimations = (element.animations ?? []).map(mapSvgAnimation);
    return (
      <image
        href={element.src ?? testImg}
        key={index}
        x={element.x}
        y={element.y}
        width={element.width}
        height={element.height}
      >
        {mappedAnimations}
      </image>
    );
  } else if (isSvgTextElement(element)) {
    const texts = element.text.split("\n").map((text, txtidx) => {
      let mappedAnimations = (element.animations ?? []).map(
        (animation, aniamtionIndex) =>
          mapSvgTextAnimation(animation, aniamtionIndex, element, index, txtidx)
      );
      return (
        <text
          x={element.x}
          y={element.y}
          dx={(element.dx ?? 0) * txtidx}
          dy={(element.dy ?? element.fontSize * 1.4) * txtidx}
          key={txtidx}
          fill={element.color}
          fontSize={element.fontSize}
          fontFamily={fontFamilies[element.fontFamily]}
          dominantBaseline="text-before-edge"
          textAnchor="start"
        >
          {text}
          {mappedAnimations}
        </text>
      );
    });
    return <g key={index}>{texts}</g>;
  } else if (isSvgCircleElement(element)) {
    let mappedAnimations = (element.animations ?? []).map(mapSvgAnimation);
    return (
      <circle
        r={element.r}
        cx={element.cx}
        cy={element.cy}
        key={index}
        fill={element.fill}
      >
        {mappedAnimations}
      </circle>
    );
  } else if (isSvgRectangleElement(element)) {
    let mappedAnimations = (element.animations ?? []).map(mapSvgAnimation);
    return (
      <rect
        width={element.width}
        height={element.height}
        key={index}
        rx={element.rx}
        ry={element.ry}
        x={element.x}
        y={element.y}
        fill={element.fill}
      >
        {mappedAnimations}
      </rect>
    );
  }
};
