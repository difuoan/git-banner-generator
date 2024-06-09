import { SvgElement } from "@/types/svgElement";
import { isSvgImgElement } from "@/types/svgImgElement";
import { mapSvgAnimation } from "./mapSvgAnimation";
import { isSvgTextElement } from "@/types/svgTextElement";
import { fontFamilies } from "@/types/fonts";

export const mapSvgElement = (element: SvgElement, index: number) => {
  const mappedAnimations = (element.animations ?? []).map(mapSvgAnimation);
  if (isSvgImgElement(element)) {
    return (
      <image
        href={element.src}
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
    return (
      <text
        x={element.x}
        y={element.y}
        key={index}
        fill={element.color}
        fontSize={element.fontSize}
        fontFamily={fontFamilies[element.fontFamily]}
        dominantBaseline="text-before-edge"
        textAnchor="start"
      >
        {element.text}
      </text>
    );
  }
};
