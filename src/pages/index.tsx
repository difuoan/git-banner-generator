import { downloadSvg } from "@/utils/downloadGeneratedSvg";
import SVGComponent from "../components/svg";
import { useState } from "react";
import { SvgElement } from "@/types/svgElement";
import NumberInput from "@/components/numberInput";
import Button from "@/components/button";

export default function Home() {
  const initialState: SvgElement[] = [
    {
      "font-size": "16 px",
      position: "center center",
      text: "Hello World!",
    },
  ];
  const initialWidth = 600;
  const initialHeight = 200;
  const [displaySvg, setDisplaySvg] = useState(true);
  const [svgWidth, setSvgWidth] = useState(initialWidth);
  const [svgHeight, setSvgHeight] = useState(initialHeight);
  const [elements, setElements] = useState<SvgElement[]>([...initialState]);
  const playAnimations = () => {
    // removes and then adds the svg which triggers a re-render of the element and thus starts the animations from 0
    setDisplaySvg(false);
    setTimeout(() => {
      setDisplaySvg(true);
    }, 0);
  };
  const resetState = () => {
    setElements([...initialState]);
    setSvgWidth(initialWidth);
    setSvgHeight(initialHeight);
  };
  if (displaySvg) {
    return (
      <main className={`flex min-h-screen flex-col items-center p-24 gap-8`}>
        <SVGComponent
          elements={elements}
          svgwidth={svgWidth}
          svgheight={svgHeight}
        />
        <div className={"flex flex-row gap-8"}>
          <Button label="&#10227; Reset" onClick={resetState} />
          <Button label="&#11208; Play animations" onClick={playAnimations} />
          <Button label="&#128190; Download" onClick={downloadSvg} />
        </div>
        <div>
          <NumberInput
            label="Width"
            value={svgWidth}
            onChange={(val: number) => setSvgWidth(val)}
            min={1}
            max={1000}
          />
          <NumberInput
            label="Height"
            value={svgHeight}
            onChange={(val: number) => setSvgHeight(val)}
            min={1}
            max={500}
          />
        </div>
      </main>
    );
  } else {
    <main className={`flex min-h-screen flex-col items-center p-24 gap-8`}>
      {/* not really empty */}
    </main>;
  }
}
