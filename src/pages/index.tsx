import { downloadSvg } from "@/utils/downloadGeneratedSvg";
import SVGComponent from "../components/svg";
import { useState } from "react";
import { SvgElement, isSvgElement } from "@/types/svgElement";

export default function Home() {
  const [displaySvg, setDisplaySvg] = useState(true);
  const [svgWidth, setSvgWidth] = useState(600);
  const [svgHeight, setSvgHeight] = useState(200);
  const [elements, setElements] = useState<SvgElement[]>([
    {
      "font-size": "16 px",
      position: "center center",
      text: "Hello World!",
    },
  ]);
  const playFromStart = () => {
    // removes and then adds the svg which triggers a re-render of the element and thus starts the animations from 0
    setDisplaySvg(false);
    setTimeout(() => {
      setDisplaySvg(true);
    }, 0);
  };
  if (displaySvg) {
    return (
      <main className={`flex min-h-screen flex-col items-center p-24 gap-8`}>
        <SVGComponent
          elements={elements}
          svgWidth={svgWidth}
          svgHeight={svgHeight}
        />
        <div className={"flex flex-row gap-8"}>
          <button
            onClick={playFromStart}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          >
            &#10227; Play from start
          </button>
          <button
            onClick={downloadSvg}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          >
            &#128190; Download
          </button>
        </div>
        <div>
          <div className={"flex flex-row gap-8"}>
            <span>Width</span>
            <input
              type="range"
              min="100"
              max="1000"
              value={svgWidth}
              onChange={(event) => setSvgWidth(Number(event.target.value))}
            />
          </div>
          <div className={"flex flex-row gap-8"}>
            <span>Height</span>
            <input
              type="range"
              min="50"
              max="500"
              value={svgHeight}
              onChange={(event) => setSvgHeight(Number(event.target.value))}
            />
          </div>
        </div>
      </main>
    );
  } else {
    return null;
  }
}
