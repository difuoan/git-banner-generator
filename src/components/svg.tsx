import { SvgElement, isSvgElement } from "@/types/svgElement";
import { isSvgTextElement } from "@/types/svgTextElement";
import { JSX, SVGProps, useEffect, useState } from "react";

const SVGComponent = (
  props: JSX.IntrinsicAttributes &
    SVGProps<SVGSVGElement> & {
      elements: SvgElement[];
      svgHeight: number;
      svgWidth: number;
    }
) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  // only display client side to avoid stupid "css is not the same on server/client" error
  if (!isClient) return null;

  const elementHtml = props.elements.map(
    (element: SvgElement, index: number) => {
      if (isSvgTextElement(element)) {
        return (
          <span
            key={index}
            style={{
              fontSize: element["font-size"],
            }}
          >
            {element.text}
          </span>
        );
      }
    }
  );

  return (
    <svg
      id="generated-banner"
      fill="none"
      viewBox={"0 0 " + props.svgWidth + " " + props.svgHeight}
      width={props.svgWidth}
      height={props.svgHeight}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <foreignObject width="100%" height="100%">
        {/* @ts-ignore xmlns throws ts error => ignored! */}
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            {`
            /* CSS Reset */
            #generated-banner * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-size: 100%;
              font-weight: normal;
            }

            /* Animations */
            @keyframes wiggle  {
              0% { transform: rotate( 0.0deg) }
              10% { transform: rotate(14.0deg) }
              20% { transform: rotate(-8.0deg) }
              30% { transform: rotate(14.0deg) }
              40% { transform: rotate(-4.0deg) }
              50% { transform: rotate(10.0deg) }
              60% { transform: rotate( 0.0deg) }
              100% { transform: rotate( 0.0deg) }
            }

            .container {
              width: 100%;
              height: ` +
              props.svgHeight +
              `px;
              background: white;
              
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
              font-size: 16px;
            }
            
            @media (prefers-reduced-motion) {
              * {
                animation: none;
              }
            }`}
          </style>
          <div className="container">{elementHtml}</div>
        </div>
      </foreignObject>
    </svg>
  );
};
export default SVGComponent;
