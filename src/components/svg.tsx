import { SvgElement } from "@/types/svgElement";
import { mapSvgElement } from "@/utils/mapSvgElement";
import { JSX, SVGProps, useEffect, useState } from "react";

const SVGComponent = (
  props: Partial<JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>> & {
    elements: SvgElement[];
    height: number;
    width: number;
    background: string;
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
      viewBox={"0 0 " + props.width + " " + props.height}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{ maxWidth: "100%", maxHeight: "auto" }}
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
              cursor: default;
              
              /* disables selection of elements */
              -webkit-touch-callout: none; /* iOS Safari */
              -webkit-user-select: none; /* Safari */
              -khtml-user-select: none; /* Konqueror HTML */
              -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
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
            .wiggle {
              animation: wiggle 1.5s linear -0.5s infinite;
            }
            
            .slide-in-left {
              animation: slide-in-left 1s forwards;
              -webkit-animation: slide-in-left 1s forwards;
              transform: translateX(-200%);
              -webkit-transform: translateX(-200%);
            }
            @keyframes slide-in-left {
              100% { transform: translateX(0%); }
            }
          
            .slide-out-left {
              animation: slide-out-left 1s forwards;
              -webkit-animation: slide-out-left 1s forwards;
            }
            @keyframes slide-out-left {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-200%); }
            }          

            .container {
              width: 100%;
              height: ` +
              props.height +
              `px;
              background: ` +
              props.background +
              `;
              max-width: 100%;
              max-height: 100%;
              
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
