import { JSX, SVGProps, useEffect, useState } from "react";

const SVGComponent = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  // only display client side to avoid stupid "css is not the same on server/client" error
  if (!isClient) return null;

  return (
    <svg
      fill="none"
      viewBox="0 0 600 200"
      width={600}
      height={200}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      id="generated-banner"
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
            
            @keyframes hi  {
              0% { transform: rotate( 0.0deg) }
              10% { transform: rotate(14.0deg) }
              20% { transform: rotate(-8.0deg) }
              30% { transform: rotate(14.0deg) }
              40% { transform: rotate(-4.0deg) }
              50% { transform: rotate(10.0deg) }
              60% { transform: rotate( 0.0deg) }
              100% { transform: rotate( 0.0deg) }
            }

            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            .container {
              --color-main: #5452ee;
              --color-primary: #e73c7e;
              --color-secondary: #23a6d5;
              --color-tertiary: #ffff;

              background: linear-gradient(-45deg, var(--color-main), var(--color-primary), var(--color-secondary), var(--color-tertiary));
              background-size: 400% 400%;
              animation: gradient 15s ease infinite;
              
              width: 100%;
              height: 200px;
              
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
              font-size: 16px;
            }
            
            .hi {
              animation: hi 1.5s linear -0.5s infinite;
              display: inline-block;
              transform-origin: 70% 70%;
            }
            
            @media (prefers-color-scheme: light) {
              .container {
                --color-main: #F15BB5;
                --color-primary: #24b0ef;
                --color-secondary: #4526f6;
                --color-tertiary: #f6f645;
              }
            }
            
            @media (prefers-reduced-motion) {
              .container {
                animation: none;
              }
              .hi {
                animation: none;
              }
            }`}
          </style>
          <div className="container">
            <h1>
              {"Hello World! I'm Lucas Venturini"}
              <div className="hi">{"\uD83D\uDC4B"}</div>
            </h1>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
};
export default SVGComponent;
