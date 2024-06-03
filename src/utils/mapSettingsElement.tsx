import Select from "@/components/select";
import StringInput from "@/components/stringInput";
import TextArea from "@/components/textArea";
import { aniamtionCSS } from "@/data/animationCss";
import { animations } from "@/types/animations";
import { SvgElement } from "@/types/svgElement";
import { isSvgImgElement } from "@/types/svgImgElement";
import { isSvgTextElement } from "@/types/svgTextElement";
import { replaceData } from "./replaceData";

export const mapSettingsElement = (
  element: SvgElement,
  index: number,
  onChange: Function,
  svgHeight: number,
  svgWidth: number,
  onDelete: Function
) => {
  let content = null;
  let animationCss = null;
  let title = "Element";
  if (isSvgTextElement(element)) {
    content = (
      <StringInput
        value={element["text"]}
        label="Text"
        onChange={(value: string) => onChange({ ...element, text: value })}
      />
    );
    title = "Text #" + element.index;
  } else if (isSvgImgElement(element)) {
    content = (
      <StringInput
        value={element["src"]}
        label="Src"
        onChange={(value: string) => onChange({ ...element, src: value })}
      />
    );
    title = "Image #" + element.index;
  }
  if (element["animation"]) {
    const animCss = replaceData(
      element["animationCss"] ?? aniamtionCSS[element["animation"]],
      element.index,
      svgHeight,
      svgWidth
    );
    animationCss = (
      <TextArea
        value={animCss}
        label="Animation CSS"
        onChange={(value: string) =>
          onChange({ ...element, animationCss: value })
        }
      />
    );
  }
  return (
    <form
      className="flex flex-col gap-4 border border-gray-400 p-8 rounded resize-x"
      style={{ overflow: "auto", position: "relative" }}
      key={index}
    >
      <span
        className="absolute"
        style={{ right: "2rem", cursor: "pointer" }}
        onClick={() => onDelete(element.index)}
      >
        &#128465;
      </span>
      <h6 className="text-lg font-bold dark:text-white">{title}</h6>
      {content}
      <TextArea
        value={element["style"]}
        label="Style"
        onChange={(value: string) => onChange({ ...element, style: value })}
      />
      <Select
        value={element["animation"]}
        label="Animation"
        onChange={(value: string) => onChange({ ...element, animation: value })}
        options={animations}
      />
      {animationCss}
    </form>
  );
};
