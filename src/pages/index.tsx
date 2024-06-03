import { downloadSvg } from "@/utils/downloadGeneratedSvg";
import SVGComponent from "../components/svg";
import { useState } from "react";
import { SvgElement } from "@/types/svgElement";
import NumberInput from "@/components/numberInput";
import Button from "@/components/button";
import { mapSettingsElement } from "@/utils/mapSettingsElement";
import StringInput from "@/components/stringInput";
import Image from "next/image";
import { presets } from "@/data/presets";

export default function Home() {
  const [presetToUse, setPresetToUse] = useState(0);
  const initialState: SvgElement[] = presets[presetToUse].data;
  const initialWidth = 800;
  const initialHeight = 200;
  const initialBackground = "transparent";
  const [displaySvg, setDisplaySvg] = useState(true);
  const [elementIndex, setElementIndex] = useState(4);
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
    setElementIndex(elements.length + 1);
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
  const changePreset = (presetIndex: number) => {
    setPresetToUse(presetIndex);
    resetState();
  };
  if (displaySvg) {
    return (
      <main
        className={`flex min-h-screen flex-col items-center p-24 gap-8 bg-gradient-to-b from-gray-300 bg-gray-100 max-w-full`}
      >
        {/* HEADER */}
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
        {/* SVG */}
        <div style={{ maxWidth: "600px", minWidth: "50%", width: "100%" }}>
          <SVGComponent
            elements={elements}
            width={svgWidth}
            height={svgHeight}
            background={svgBackground}
          />
        </div>
        {/* BUTTONS */}
        <div className={"flex flex-row gap-8"}>
          <Button label="&#10227; Reset" onClick={resetState} />
          <Button label="&#11208; Play animations" onClick={playAnimations} />
          <Button label="&#128190; Download" onClick={downloadSvg} />
        </div>
        <div className={"flex flex-row gap-8"}>
          <Button label="&#43; Text" onClick={addText} />
        </div>
        {/* SETTINGS */}
        <div className="flex flex-row gap-8 flex-wrap content-center justify-center">
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
        {/* PRESETS */}
        <h6 className="text-lg font-bold dark:text-white">Explore Presets</h6>
        <div
          className="flex flex-row gap-8 flex-wrap content-center justify-center cursor-pointer"
          onClick={() => changePreset(0)}
        >
          <Image
            src="/ljvBanner.svg"
            alt="Lucas J. Venturini Banner"
            width={250}
            height={100}
            className="flex flex-col gap-4 border border-gray-400 rounded"
          />
        </div>
        {/* LINKS */}
        <div>
          <h6 className="text-lg font-bold dark:text-white">
            Helpful Tools & Sites
          </h6>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              <a
                href="https://www.base64-image.de/"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                target="_blank"
              >
                image to base64 converter
              </a>
            </li>
            <li>
              <a
                href="https://www.compart.com/de/unicode/"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                target="_blank"
              >
                unicode characters
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/csSref/css_websafe_fonts.php"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                target="_blank"
              >
                websafe fonts
              </a>
            </li>
          </ul>
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
