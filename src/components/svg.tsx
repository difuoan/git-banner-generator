import { SvgElement } from "@/types/svgElement";
import { isSvgTextElement } from "@/types/svgTextElement";
import { mapSvgDefinitions } from "@/utils/elements/mapSvgDefinitions";
import { mapSvgElement } from "@/utils/elements/mapSvgElement";
import { JSX, SVGProps } from "react";

const SVGComponent = (
  props: Partial<JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>> & {
    elements: SvgElement[];
    svgheight: number;
    svgwidth: number;
    svgbackground: string;
  }
) => {
  const uniqueDefs: string[] = [];
  const definitions = props.elements
    .filter(isSvgTextElement)
    .filter((ele) => {
      if (uniqueDefs.includes(ele.fontFamily)) return false;
      uniqueDefs.push(ele.fontFamily);
      return true;
    })
    .map(mapSvgDefinitions);
  const elementHtml = props.elements.map(mapSvgElement);
  return (
    <svg
      id="generated-banner"
      fill="none"
      viewBox={"0 0 " + props.svgwidth + " " + props.svgheight}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      {definitions}
      <rect
        width={props.svgwidth}
        height={props.svgheight}
        fill={props.svgbackground}
        x={0}
        y={0}
      ></rect>
      {elementHtml}
    </svg>
  );
};
export default SVGComponent;
