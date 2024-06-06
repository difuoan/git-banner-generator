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
import { debounce } from "lodash";

export default function Home() {
  const [debouncing, setDebouncing] = useState(false);
  const [presetToUse, setPresetToUse] = useState(0);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [displaySvg, setDisplaySvg] = useState(true);
  const preset = { ...presets[presetToUse] };
  const [svgWidth, setSvgWidth] = useState(preset.width);
  const [svgHeight, setSvgHeight] = useState(preset.height);
  const [elements, setElements] = useState<SvgElement[]>([...preset.elements]);
  const elementIndex = Math.max(...elements.map((ele) => ele.index), 0) + 1;
  const [history, setHistory] = useState<HistoryElement[]>([
    {
      elements: elements,
      height: svgHeight,
      width: svgWidth,
    },
  ]);

  // FUNCTIONS
  const playAnimations = () => {
    // removes and then adds the svg which triggers a re-render of the element and thus starts the animations from 0
    setDisplaySvg(false);
    setTimeout(() => {
      setDisplaySvg(true);
    }, 0);
  };
  const resetState = (index = presetToUse) => {
    const pre = presets[index];
    setElements([...pre.elements]);
    setSvgWidth(pre.width);
    setSvgHeight(pre.height);
    resetHistory();
  };
  const onElementChange = (element: SvgElement) => {
    const eIndex = elements.findIndex((ele) => ele.index === element.index);
    if (eIndex < 0) return;
    const newEles = elements.map((ele) => {
      if (ele.index === element.index) return element;
      return ele;
    });
    setElements(newEles);
    addHistoryElement({
      elements: newEles,
      height: svgHeight,
      width: svgWidth,
    });
  };
  const copyPreset = () => {
    const newPres: Preset = {
      elements: elements,
      height: svgHeight,
      width: svgWidth,
      src: "",
    };
    navigator.clipboard.writeText(JSON.stringify(newPres));
  };
  const onElementDelete = (elementIndex: number) => {
    const newElements = [...elements];
    const eleIndex = newElements.findIndex((ele) => ele.index === elementIndex);
    newElements.splice(eleIndex, 1);
    setElements(newElements);
    addHistoryElement({
      elements: newElements,
      height: svgHeight,
      width: svgWidth,
    });
  };
  const addImg = () => {
    const newElements = [
      ...elements,
      {
        index: elementIndex,
        src: testImg,
        style: "position: absolute;\nwidth: 100px;",
      },
    ];
    setElements(newElements);
    addHistoryElement({
      elements: newElements,
      height: svgHeight,
      width: svgWidth,
    });
  };
  const changePreset = (presetIndex: number) => {
    window.scrollTo(0, 0);
    setPresetToUse(presetIndex);
    resetState(presetIndex);
  };
  const timeTravel = (index: number) => {
    if (index < 0) return;
    const histEle = { ...history[index] };
    setElements([...histEle.elements]);
    setSvgHeight(histEle.height);
    setSvgWidth(histEle.width);
    setHistoryIndex(index);
  };
  const addHistoryElement = (historyElement: HistoryElement) => {
    setDebouncing(true);
    addHistoryElementDebounced(historyElement);
  };
  const addHistoryElementDebounced = debounce(
    (historyElement: HistoryElement) => {
      let remainingHistory = history;
      const newIndx = historyIndex + 1;
      const cutHistory: boolean = newIndx < history.length;
      if (cutHistory) {
        remainingHistory.splice(newIndx, history.length - newIndx);
      }
      setHistory([...remainingHistory, historyElement]);
      setHistoryIndex(newIndx);
      setDebouncing(false);
    },
    1000
  );
  const resetHistory = () => {
    setHistory([
      {
        elements: elements,
        height: svgHeight,
        width: svgWidth,
      },
    ]);
    setHistoryIndex(0);
  };

  // HTML
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
          disabled={debouncing}
          label="&#10227; Reset"
          onClick={() => resetState()}
          color="amber"
        />
        <Button
          label="&#11208; Play animations"
          onClick={playAnimations}
          color="teal"
        />
        <Button
          label="&#9112; Copy Preset"
          onClick={copyPreset}
          disabled={debouncing}
        />
        <Button
          label="&#128427; Download SVG"
          onClick={downloadSvg}
          disabled={debouncing}
        />
      </div>
      <div className={"flex flex-row gap-8"}>
        <Button label="&#43; Image" onClick={addImg} color="slate" />
      </div>
      <div className={"flex flex-row gap-8"}>
        <Button
          disabled={debouncing || historyIndex <= 0}
          label="&#171; Back"
          onClick={() => timeTravel(historyIndex - 1)}
          color="slate"
        />
        <Button
          disabled={
            debouncing ||
            !(history.length > 0 && historyIndex < history.length - 1)
          }
          label="Next &#187;"
          onClick={() => timeTravel(historyIndex + 1)}
          color="slate"
        />
      </div>
      {/* SETTINGS */}
      <div className="flex flex-row gap-8 flex-wrap content-center justify-center">
        <form className="flex flex-col gap-4 border border-gray-400 p-8 rounded">
          <h6 className="text-lg font-bold dark:text-white">SVG</h6>
          <NumberInput
            keyVal="width"
            label="Width"
            value={svgWidth}
            onChange={(val: number) => {
              setSvgWidth(val);
              addHistoryElement({
                elements: elements,
                height: svgHeight,
                width: val,
              });
            }}
            min={1}
            max={1000}
          />
          <NumberInput
            keyVal="height"
            label="Height"
            value={svgHeight}
            onChange={(val: number) => {
              setSvgHeight(val);
              addHistoryElement({
                elements: elements,
                width: svgWidth,
                height: val,
              });
            }}
            min={1}
            max={500}
          />
        </form>
        {settings}
      </div>
      {/* PRESETS */}
      <span className="text-4xl font-extrabold dark:text-white">Presets</span>
      <div className="flex flex-row gap-8 flex-wrap content-center justify-center w-full">
        {presetHtml}
      </div>
    </main>
  );
}
