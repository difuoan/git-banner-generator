import { downloadSvg } from "@/utils/downloadGeneratedSvg";
import SVGComponent from "../components/svg";
import { useEffect, useState } from "react";
import { SvgElement } from "@/types/svgElement";
import NumberInput from "@/components/numberInput";
import Button from "@/components/button";
import { mapSettingsElement } from "@/utils/mapSettingsElement";
import StringInput from "@/components/stringInput";
import { presets } from "@/data/presets";
import { Preset } from "@/types/preset";
import { testImg } from "@/data/testImg";

export default function Home() {
  let [presetToUse, setPresetToUse] = useState(1);
  let [preset, setPreset] = useState(presets[presetToUse]);
  let [elementIndex, setElementIndex] = useState(4);
  const [displaySvg, setDisplaySvg] = useState(true);
  const [svgWidth, setSvgWidth] = useState(preset.width);
  const [svgBackground, setSvgBackground] = useState(preset.background);
  const [svgHeight, setSvgHeight] = useState(preset.height);
  const [elements, setElements] = useState<SvgElement[]>([...preset.elements]);

  // FUNCTIONS
  const playAnimations = () => {
    // removes and then adds the svg which triggers a re-render of the element and thus starts the animations from 0
    setDisplaySvg(false);
    setTimeout(() => {
      setDisplaySvg(true);
    }, 0);
  };
  const resetState = () => {
    setElements([...presets[presetToUse].elements]);
    setSvgWidth(preset.width);
    setSvgHeight(preset.height);
    setSvgBackground(preset.background);
  };
  const onElementChange = (element: SvgElement) => {
    const eIndex = elements.findIndex((ele) => ele.index === element.index);
    if (eIndex < 0) return;
    setElements(
      elements.map((ele) => {
        if (ele.index === element.index) return element;
        return ele;
      })
    );
  };
  const onElementDelete = (elementIndex: number) => {
    const newElements = [...elements];
    const eleIndex = newElements.findIndex((ele) => (ele.index = elementIndex));
    newElements.splice(eleIndex, 1);
    setElements(newElements);
  };
  const addText = () => {
    setElements([
      ...elements,
      {
        index: elementIndex,
        text: "Your Text Here!",
        style: "position: absolute;",
      },
    ]);
    setElementIndex(elementIndex + 1);
  };
  const addImg = () => {
    setElements([
      ...elements,
      {
        index: elementIndex,
        src: testImg,
        style: "position: absolute;\nwidth: 100px",
      },
    ]);
    setElementIndex(elementIndex + 1);
  };
  const settings = elements.map((ele, inde) =>
    mapSettingsElement(
      ele,
      inde,
      onElementChange,
      svgHeight,
      svgWidth,
      onElementDelete
    )
  );
  const changePreset = (presetIndex: number) => {
    setPresetToUse(presetIndex);
  };

  // EFFECTS
  useEffect(() => {
    // resetState();
    setPreset(presets[presetToUse]);
  }, [presetToUse]);
  useEffect(() => {
    resetState();
  }, [preset]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    setElementIndex(elements.length + 1);
  }, [elements]);

  // HTML
  const presetHtml = presets.map((preset: Preset, index: number) => {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={preset.src}
        alt={preset.src}
        className="flex flex-col gap-4 border border-gray-400 rounded cursor-pointer"
        onClick={() => changePreset(index)}
        key={index}
        style={{ maxWidth: "250px", maxHeight: "150px" }}
      />
    );
  });
  let svgToDisplay = (
    <div style={{ minHeight: "200px" }}>{/* not really empty */}</div>
  );
  if (displaySvg) {
    svgToDisplay = (
      <SVGComponent
        elements={elements}
        width={svgWidth}
        height={svgHeight}
        background={svgBackground}
      />
    );
  }
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
        {svgToDisplay}
      </div>
      {/* BUTTONS */}
      <div className={"flex flex-row gap-8"}>
        <Button label="&#10227; Reset" onClick={resetState} />
        <Button label="&#11208; Play animations" onClick={playAnimations} />
        <Button label="&#128190; Download" onClick={downloadSvg} />
      </div>
      <div className={"flex flex-row gap-8"}>
        <Button label="&#43; Text" onClick={addText} />
        <Button label="&#43; Image" onClick={addImg} />
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
      <h6 className="text-lg font-bold dark:text-white">Presets</h6>
      <div className="flex flex-row gap-8 flex-wrap content-center justify-center">
        {presetHtml}
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
              href="https://www.compart.com/en/unicode/"
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
}
