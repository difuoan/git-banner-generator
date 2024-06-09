import StringInput from "@/components/stringInput";
import { SvgElement } from "@/types/svgElement";
import { isSvgImgElement } from "@/types/svgImgElement";
import Button from "@/components/button";
import FileInput from "@/components/fileInput";
import { mapSettingAnimation } from "./mapSettingAnimation";
import { isSvgTextElement } from "@/types/svgTextElement";
import NumberInput from "@/components/numberInput";
import Select from "@/components/select";
import { fontFamilies } from "@/types/fonts";
import { generateImgSettings } from "./generateImgSettings";
import { generateTextSettings } from "./generateTextSettings";
import { generateCircleSettings } from "./generateCircleSettings";
import { isSvgCircleElement } from "@/types/svgCircleElement";
import { animatableAttributes } from "@/data/animatableAttributes";
import { isSvgRectangleElement } from "@/types/svgRectangleElement";
import { generateRectangleSettings } from "./generateRectangleSettings";

export const mapSettingsElement = (
  element: SvgElement,
  onChange: Function,
  onDelete: Function
) => {
  let animAttr = [];
  let typeSpecificInput = null;
  let elementName = "Element";
  const animationSettings = (element.animations ?? []).map((animation, index) =>
    mapSettingAnimation(animation, index, element, onChange)
  );
  if (isSvgImgElement(element)) {
    elementName = "Image";
    animAttr = animatableAttributes["img"];
    typeSpecificInput = generateImgSettings(element, onChange, onDelete);
  } else if (isSvgTextElement(element)) {
    elementName = "Text";
    animAttr = animatableAttributes["text"];
    typeSpecificInput = generateTextSettings(element, onChange, onDelete);
  } else if (isSvgCircleElement(element)) {
    animAttr = animatableAttributes["circle"];
    elementName = "Circle";
    typeSpecificInput = generateCircleSettings(element, onChange, onDelete);
  } else if (isSvgRectangleElement(element)) {
    animAttr = animatableAttributes["rectangle"];
    elementName = "Rectangle";
    typeSpecificInput = generateRectangleSettings(element, onChange, onDelete);
  }
  return (
    <form
      className="flex flex-col gap-4 border border-gray-400 p-8 rounded w-full"
      key={element.index}
    >
      <StringInput
        keyVal={element.index + (element.name ?? "")}
        value={element["name"] ?? elementName + " " + element.index.toString()}
        label="Name"
        onChange={(value: string) => onChange({ ...element, name: value })}
      />
      {typeSpecificInput}
      {animationSettings}
      <Button
        label="+ Animation"
        onClick={() =>
          onChange({
            ...element,
            animations: [
              ...(element.animations ?? []),
              {
                attributeName: animAttr[0],
                from: 0,
                to: 0,
                dur: 1,
                begin: 0,
                repeatCount: 1,
                keySplines: "ease-in-out",
              },
            ],
          })
        }
        color="slate"
      />
      <Button
        label="&#128465; Delete Element"
        onClick={() => onDelete(element.index)}
        color="rose"
      />
    </form>
  );
};
