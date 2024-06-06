import { SvgElement } from "@/types/svgElement";
import { mapSvgElement } from "@/utils/mapSvgElement";
import { JSX, SVGProps, useEffect, useState } from "react";

const SVGComponent = (
  props: Partial<JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>> & {
    elements: SvgElement[];
    svgheight: number;
    svgwidth: number;
  }
) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  // only display client side to avoid stupid "css is not the same on server/client" error
  if (!isClient) return null;

  const elementHtml = props.elements.map(mapSvgElement);

  return (
    <svg
      id="generated-banner"
      fill="none"
      viewBox={"0 0 " + props.svgwidth + " " + props.svgheight}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{ maxWidth: "100%", maxHeight: "auto" }}
      {...props}
    >
      {elementHtml}
    </svg>
  );
};
export default SVGComponent;
