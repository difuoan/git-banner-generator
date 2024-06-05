import Select from "@/components/select";
import StringInput from "@/components/stringInput";
import TextArea from "@/components/textArea";
import { animationCss } from "@/data/animationCss";
import { AnimationName, animations } from "@/types/animations";
import { SvgElement } from "@/types/svgElement";
import { isSvgImgElement } from "@/types/svgImgElement";
import { isSvgTextElement } from "@/types/svgTextElement";
import { replaceData } from "./replaceData";
import Button from "@/components/button";
import FileInput from "@/components/fileInput";

export const mapSettingsElement = (
  element: SvgElement,
  index: number,
  onChange: Function,
  svgHeight: number,
  svgWidth: number,
  onDelete: Function
) => {
  let animationCssInput = null;
  let typeSpecificInput = null;
  let elementName = "Element";
  if (isSvgTextElement(element)) {
    elementName = "Text";
    typeSpecificInput = (
      <StringInput
        value={element["text"]}
        label="Text"
        onChange={(value: string) => onChange({ ...element, text: value })}
      />
    );
  } else if (isSvgImgElement(element)) {
    elementName = "Image";
    typeSpecificInput = (
      <FileInput
        onFileUpload={(val: string) => {
          onChange({ ...element, src: val });
        }}
      />
    );
  }
  if (element["animation"]) {
    const animCss = replaceData(
      element["animationCss"] ?? animationCss[element["animation"]],
      element.index,
      svgHeight,
      svgWidth
    );
    animationCssInput = (
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
      <StringInput
        value={element["name"] ?? elementName + " " + element.index.toString()}
        label="Name"
        onChange={(value: string) => onChange({ ...element, name: value })}
      />
      {typeSpecificInput}
      <TextArea
        value={element["style"]}
        label="Style"
        onChange={(value: string) => onChange({ ...element, style: value })}
      />
      <Select
        value={element["animation"]}
        label="Animation"
        onChange={(value: AnimationName) => {
          onChange({
            ...element,
            animation: value,
            animationCss: animationCss[value],
          });
        }}
        options={animations}
      />
      {animationCssInput}
      <Button
        label="&#128465; Delete"
        onClick={() => onDelete(element.index)}
        color="rose"
      />
    </form>
  );
};
