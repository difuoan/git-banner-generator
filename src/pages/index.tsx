import { downloadSvg } from "@/utils/downloadGeneratedSvg";
import SVGComponent from "../components/svg";
import { useState } from "react";
import { SvgElement } from "@/types/svgElement";
import NumberInput from "@/components/numberInput";
import Button from "@/components/button";
import { mapSettingsElement } from "@/utils/mapSettingsElement";
import StringInput from "@/components/stringInput";

export default function Home() {
  const initialState: SvgElement[] = [
    {
      text: "Hello World! I'm Lucas Venturini",
      index: 1,
      style: `font-size: 24px;\nfont-weight: bold;\nposition: absolute;\nleft: 100px;\ntop: 80px;`,
      animation: "slide-in",
    },
    {
      text: "👋",
      index: 2,
      style: `font-size: 40px;\nposition: absolute;\nright: 200px;\ntop: 65px;`,
      animation: "wiggle",
    },
  ];
  const initialWidth = 800;
  const initialHeight = 200;
  const initialBackground = "transparent";
  const [displaySvg, setDisplaySvg] = useState(true);
  const [elementIndex, setElementIndex] = useState(3);
  const [svgWidth, setSvgWidth] = useState(initialWidth);
  const [svgBackground, setSvgBackground] = useState(initialBackground);
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
    setSvgBackground(initialBackground);
    setElementIndex(3);
  };
  const onElementChange = (element: SvgElement) => {
    const elementIndex = elements.findIndex(
      (ele) => ele.index === element.index
    );
    if (elementIndex < 0) return;
    setElements(
      elements.map((ele) => {
        if (ele.index === element.index) return element;
        return ele;
      })
    );
  };
  const addText = () => {
    setElements([
      ...elements,
      {
        index: elementIndex,
        text: "Your Text Here!",
        style: "",
      },
    ]);
    setElementIndex(elementIndex + 1);
  };
  const settings = elements.map((ele, inde) =>
    mapSettingsElement(ele, inde, onElementChange)
  );
  if (displaySvg) {
    return (
      <main
        className={`flex min-h-screen flex-col items-center p-24 gap-8 bg-gradient-to-b from-gray-300 bg-gray-100 max-w-full`}
      >
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          GitHub-safe Animated SVG Generator
        </h1>
        <a
          href="https://github.com/difuoan"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          target="_blank"
        >
          <small>by Lucas J. Venturini</small>
        </a>
        <div style={{ maxWidth: "600px", minWidth: "50%", width: "100%" }}>
          <SVGComponent
            elements={elements}
            width={svgWidth}
            height={svgHeight}
            background={svgBackground}
          />
        </div>
        <div className={"flex flex-row gap-8"}>
          <Button label="&#10227; Reset" onClick={resetState} />
          <Button label="&#11208; Play animations" onClick={playAnimations} />
          <Button label="&#128190; Download" onClick={downloadSvg} />
        </div>
        <div className={"flex flex-row gap-8"}>
          <Button label="&#43; Text" onClick={addText} />
        </div>
        <div className="flex flex-row gap-8 flex-wrap content-center items-center">
          <form className="flex flex-col gap-4 border border-gray-400 p-8 rounded">
            <h6 className="text-lg font-bold dark:text-white">SVG</h6>
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
            <StringInput
              label="Background"
              value={svgBackground}
              onChange={(val: string) => setSvgBackground(val)}
            />
          </form>
          {settings}
        </div>
      </main>
    );
  } else {
    <main
      className={`flex min-h-screen flex-col items-center p-24 gap-8 bg-gradient-to-b from-gray-300 bg-gray-100`}
    >
      {/* not really empty */}
    </main>;
  }
}
