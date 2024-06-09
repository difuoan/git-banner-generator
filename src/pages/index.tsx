import { downloadSvg } from "@/utils/downloadGeneratedSvg";
import SVGComponent from "../components/svg";
import { useRef, useState } from "react";
import { SvgElement } from "@/types/svgElement";
import NumberInput from "@/components/numberInput";
import Button from "@/components/button";
import { mapSettingsElement } from "@/utils/mapSettingsElement";
import { presets } from "@/data/presets";
import { Preset } from "@/types/preset";
import { HistoryElement } from "@/types/history";
import { debounce } from "lodash";
import { convertSVGToGIF } from "@/utils/downloadGif";
import Overlay from "@/components/overlay";
import Header from "@/components/header";
import StringInput from "@/components/stringInput";
import ColorInput from "@/components/colorInput";
import { SvgCircleElement } from "@/types/svgCircleElement";
import { defaultCircle } from "@/data/defaultCircle";
import { defaultText } from "@/data/defaultText";
import { defaultImg } from "@/data/defaultImg";
import { defaultRectangle } from "@/data/defaultRectangle";

export default function Home() {
  const svgContainer = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [debouncing, setDebouncing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [presetToUse, setPresetToUse] = useState(0);
  const [historyIndex, setHistoryIndex] = useState(0);
  const preset = { ...presets[presetToUse] };
  const [svgWidth, setSvgWidth] = useState(preset.width);
  const [svgBackground, setSvgBackground] = useState(preset.background);
  const [svgHeight, setSvgHeight] = useState(preset.height);
  const [elements, setElements] = useState<SvgElement[]>([...preset.elements]);
  const elementIndex = Math.max(...elements.map((ele) => ele.index), 0) + 1;
  const [history, setHistory] = useState<HistoryElement[]>([
    {
      elements: elements,
      height: svgHeight,
      width: svgWidth,
      background: svgBackground,
    },
  ]);

  // FUNCTIONS
  const resetState = (index = presetToUse) => {
    const pre = presets[index];
    setElements([...pre.elements]);
    setSvgWidth(pre.width);
    setSvgHeight(pre.height);
    setSvgBackground(pre.background);
    resetHistory();
    setAnimationKey((prevKey) => prevKey + 1);
  };
  const onElementChange = (element: SvgElement) => {
    const eIndex = elements.findIndex((ele) => ele.index === element.index);
    if (eIndex < 0) return;
    const newEles = elements.map((ele) => {
      if (ele.index === element.index) return element;
      return ele;
    });
    setElements(newEles);
    addHistoryElement({ elements: newEles });
  };
  const copyPreset = () => {
    const newPres: Preset = {
      elements: elements,
      height: svgHeight,
      width: svgWidth,
      src: "",
      background: "white",
    };
    navigator.clipboard.writeText(JSON.stringify(newPres));
  };
  const onElementDelete = (elementIndex: number) => {
    const newElements = [...elements];
    const eleIndex = newElements.findIndex((ele) => ele.index === elementIndex);
    newElements.splice(eleIndex, 1);
    setElements(newElements);
    addHistoryElement({ elements: newElements });
  };
  const addElement = (element: SvgElement) => {
    const newElements = [...elements, { ...element }];
    setElements(newElements);
    addHistoryElement({ elements: newElements });
  };
  const changePreset = (presetIndex: number) => {
    window.scrollTo(0, 0);
    setPresetToUse(presetIndex);
    resetState(presetIndex);
    setAnimationKey((prevKey) => prevKey + 1);
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
    addHistoryElementDebounced({
      elements: elements,
      height: svgHeight,
      width: svgWidth,
      background: svgBackground,
      ...historyElement,
    });
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
        background: svgBackground,
      },
    ]);
    setHistoryIndex(0);
  };

  // HTML
  const settings = elements.map((ele, inde) =>
    mapSettingsElement(ele, onElementChange, onElementDelete)
  );
  const presetHtml = presets.map((preset: Preset, index: number) => {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={preset.src}
        alt={preset.src}
        className="border border-gray-400 rounded cursor-pointer"
        onClick={() => changePreset(index)}
        key={index}
        style={{ maxWidth: "250px", maxHeight: "150px" }}
      />
    );
  });
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-gradient-to-b from-gray-300 bg-gray-100 max-w-full container lg:max-h-screen overflow-hidden">
      <div className="fixed w-full text-center lg:mr-9">
        {/* OVERLAY */}
        <Overlay busy={busy} />
        <Header />
        <div className="h-12 bg-gradient-to-b from-gray-300 to-transparent">
          {/* not really empty */}
        </div>
      </div>
      <div className="lg:columns-2 gap-8 w-full lg:max-h-screen">
        <div className="flex flex-col gap-8 lg:overflow-y-auto lg:max-h-screen lg:pl-24 lg:pr-8 pb-24 pt-8 pt-48 items-center">
          {/* SVG */}
          <div className="w-full" ref={svgContainer}>
            <SVGComponent
              elements={elements}
              svgwidth={svgWidth}
              svgheight={svgHeight}
              svgbackground={svgBackground}
              key={animationKey}
            />
          </div>
          {/* BUTTONS */}
          <div className="flex flex-row gap-y-8 gap-x-4 flex-wrap justify-center">
            <Button
              label="&#10227; Reset"
              onClick={() => resetState()}
              color="rose"
            />
            <Button
              label="&#11208; Play animations"
              onClick={() => setAnimationKey((prevKey) => prevKey + 1)}
              color="teal"
            />
            <Button
              label="&#9112; Copy Preset"
              onClick={copyPreset}
              color="slate"
              className="hidden xl:block"
            />
            <Button label="&#128427; Download SVG" onClick={downloadSvg} />
            <Button
              label="&#128427; Download GIF"
              onClick={async () => {
                setBusy(true);
                convertSVGToGIF(
                  svgContainer,
                  svgWidth,
                  svgHeight,
                  svgBackground,
                  () => setBusy(false)
                );
              }}
            />
          </div>
          {/* PRESETS BIG*/}
          <div className="hidden lg:block text-center w-full">
            <span className="text-4xl font-extrabold">Presets</span>
            <div className="flex flex-row gap-8 flex-wrap content-center justify-center w-full mt-8">
              {presetHtml}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:overflow-y-scroll lg:max-h-screen lg:pr-24 pb-24 pt-8 lg:pt-48 items-center">
          <div className="flex flex-row gap-8">
            <Button
              disabled={debouncing || historyIndex <= 0}
              label="&#171; Undo"
              onClick={() => timeTravel(historyIndex - 1)}
              color="slate"
            />
            <Button
              disabled={
                debouncing ||
                !(history.length > 0 && historyIndex < history.length - 1)
              }
              label="Redo &#187;"
              onClick={() => timeTravel(historyIndex + 1)}
              color="slate"
            />
          </div>
          <div className="flex flex-row gap-8">
            <Button
              label="&#43; Image"
              onClick={() => addElement({ ...defaultImg, index: elementIndex })}
              color="slate"
            />
            <Button
              label="&#43; Text"
              onClick={() =>
                addElement({ ...defaultText, index: elementIndex })
              }
              color="slate"
            />
            <Button
              label="&#43; Circle"
              onClick={() =>
                addElement({ ...defaultCircle, index: elementIndex })
              }
              color="slate"
            />
            <Button
              label="&#43; Rectangle"
              onClick={() =>
                addElement({ ...defaultRectangle, index: elementIndex })
              }
              color="slate"
            />
          </div>
          {/* SETTINGS */}
          <form className="border border-gray-400 p-8 rounded w-full">
            <details open>
              <summary className="cursor-pointer">
                <h6 className="text-lg font-bold inline">SVG</h6>
              </summary>
              <div className="flex flex-col gap-4 ">
                <NumberInput
                  keyVal="width"
                  label="Width"
                  value={svgWidth}
                  onChange={(val: number) => {
                    setSvgWidth(val);
                    addHistoryElement({ width: val });
                  }}
                  min={50}
                  max={1500}
                />
                <NumberInput
                  keyVal="height"
                  label="Height"
                  value={svgHeight}
                  onChange={(val: number) => {
                    setSvgHeight(val);
                    addHistoryElement({ height: val });
                  }}
                  min={1}
                  max={500}
                />
                <ColorInput
                  keyVal="background"
                  value={svgBackground}
                  label="Background"
                  onChange={(val: string) => {
                    setSvgBackground(val);
                    addHistoryElement({ background: val });
                  }}
                />
              </div>
            </details>
          </form>
          {settings}
          {/* PRESETS SMALL*/}
          <div className="lg:hidden block text-center w-full">
            <span className="text-4xl font-extrabold">Presets</span>
            <div className="flex flex-row gap-8 flex-wrap content-center justify-center w-full mt-8">
              {presetHtml}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
