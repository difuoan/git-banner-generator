import { downloadSvg } from "@/utils/downloadGeneratedSvg";
import SVGComponent from "../components/svg";
import { useState } from "react";
import { SvgElement } from "@/types/svgElement";
import NumberInput from "@/components/numberInput";
import Button from "@/components/button";
import { mapSettingsElement } from "@/utils/mapSettingsElement";
import StringInput from "@/components/stringInput";
import { presets } from "@/data/presets";
import { Preset } from "@/types/preset";
import { testImg } from "@/data/testImg";
import { HistoryElement } from "@/types/history";

export default function Home() {
  console.log("re-render");
  let [history, setHistory] = useState<HistoryElement[]>([]);
  let [presetToUse, setPresetToUse] = useState(0);
  let [historyIndex, setHistoryIndex] = useState(0);
  const [displaySvg, setDisplaySvg] = useState(true);
  const preset = { ...presets[presetToUse] };
  const [svgWidth, setSvgWidth] = useState(preset.width);
  const [svgBackground, setSvgBackground] = useState(preset.background);
  const [svgHeight, setSvgHeight] = useState(preset.height);
  const [elements, setElements] = useState<SvgElement[]>([...preset.elements]);
  const elementIndex = Math.max(...elements.map((ele) => ele.index), 0) + 1;

  // FUNCTIONS
  const playAnimations = () => {
    console.log("playAnimations");
    // removes and then adds the svg which triggers a re-render of the element and thus starts the animations from 0
    setDisplaySvg(false);
    setTimeout(() => {
      setDisplaySvg(true);
    }, 0);
  };
  const resetState = (index = presetToUse) => {
    console.log("resetState");
    const pre = presets[index];
    setElements([...pre.elements]);
    setSvgWidth(pre.width);
    setSvgHeight(pre.height);
    setSvgBackground(pre.background);
    resetHistory();
  };
  const onElementChange = (element: SvgElement) => {
    console.log("onElementChange");
    const eIndex = elements.findIndex((ele) => ele.index === element.index);
    if (eIndex < 0) return;
    setElements(
      elements.map((ele) => {
        if (ele.index === element.index) return element;
        return ele;
      })
    );
    addHistoryElement();
  };
  const onElementDelete = (elementIndex: number) => {
    console.log("onElementDelete");
    const newElements = [...elements];
    const eleIndex = newElements.findIndex((ele) => ele.index === elementIndex);
    newElements.splice(eleIndex, 1);
    setElements(newElements);
    addHistoryElement();
  };
  const addText = () => {
    console.log("addText");
    setElements([
      ...elements,
      {
        index: elementIndex,
        text: "Your Text Here!",
        style: "position: absolute;",
      },
    ]);
    addHistoryElement();
  };
  const addImg = () => {
    console.log("addImg");
    setElements([
      ...elements,
      {
        index: elementIndex,
        src: testImg,
        style: "position: absolute;\nwidth: 100px;",
      },
    ]);
    addHistoryElement();
  };
  const addDiv = () => {
    console.log("addDiv");
    setElements([
      ...elements,
      {
        index: elementIndex,
        style:
          "position: absolute;\nwidth: 100px;\nheight: 100px;\nbackground: red;",
      },
    ]);
    addHistoryElement();
  };
  const changePreset = (presetIndex: number) => {
    console.log("changePreset");
    setPresetToUse(presetIndex);
    resetState(presetIndex);
  };
  const timeTravel = (index: number) => {
    console.log("timeTravel");
    if (index < 0) return;
    const histEle = history[index];
    setElements(histEle.elements);
    setSvgBackground(histEle.background);
    setSvgHeight(histEle.height);
    setSvgWidth(histEle.width);
    setHistoryIndex(index);
  };
  const addHistoryElement = () => {
    console.log("addHistoryElement", {
      width: svgWidth,
      height: svgHeight,
      background: svgBackground,
      elements: elements,
    });
    let remainingHistory = history;
    const cutHistory: boolean = historyIndex < history.length;
    if (cutHistory) {
      remainingHistory.splice(historyIndex, history.length - historyIndex);
    }
    setHistory([
      ...remainingHistory,
      {
        width: svgWidth,
        height: svgHeight,
        background: svgBackground,
        elements: elements,
      },
    ]);
    setHistoryIndex(historyIndex + 1);
  };
  const resetHistory = () => {
    console.log("resetHistory");
    setHistory([]);
    setHistoryIndex(0);
  };

  // HTML
  let nextBtn = null;
  if (history.length > 0 && historyIndex < history.length - 1) {
    nextBtn = (
      <Button
        label="&#9112; Next"
        onClick={() => timeTravel(historyIndex + 1)}
        color="slate"
      />
    );
  }
  let prevBtn = null;
  if (historyIndex > 0) {
    prevBtn = (
      <Button
        label="&#9111; Back"
        onClick={() => timeTravel(historyIndex - 1)}
        color="slate"
      />
    );
  }
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
        svgwidth={svgWidth}
        svgheight={svgHeight}
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
        <Button
          label="&#10227; Reset"
          onClick={() => resetState()}
          color="amber"
        />
        <Button
          label="&#11208; Play animations"
          onClick={playAnimations}
          color="teal"
        />
        <Button label="&#128190; Download" onClick={downloadSvg} />
      </div>
      <div className={"flex flex-row gap-8"}>
        <Button label="&#43; Text" onClick={addText} color="slate" />
        <Button label="&#43; Image" onClick={addImg} color="slate" />
        <Button label="&#43; Div" onClick={addDiv} color="slate" />
      </div>
      <div className={"flex flex-row gap-8"}>
        {prevBtn}
        {nextBtn}
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
