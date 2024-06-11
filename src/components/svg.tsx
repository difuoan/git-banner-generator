import { SvgElement } from "@/types/svgElement";
import { mapSvgElement } from "@/utils/elements/mapSvgElement";
import { JSX, SVGProps, useEffect, useState } from "react";

const SVGComponent = (
  props: Partial<JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>> & {
    elements: SvgElement[];
    svgheight: number;
    svgwidth: number;
    svgbackground: string;
  }
) => {
  const elementHtml = props.elements.map(mapSvgElement);

  return (
    <svg
      id="generated-banner"
      fill="none"
      viewBox={"0 0 " + props.svgwidth + " " + props.svgheight}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
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
