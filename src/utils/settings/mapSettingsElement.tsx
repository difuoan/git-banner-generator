import StringInput from "@/components/stringInput";
import { SvgElement } from "@/types/svgElement";
import { isSvgImgElement } from "@/types/svgImgElement";
import Button from "@/components/button";
import { mapSettingAnimation } from "./mapSettingAnimation";
import { isSvgTextElement } from "@/types/svgTextElement";
import { isSvgCircleElement } from "@/types/svgCircleElement";
import { AnimatableAttributeValue } from "@/data/animatableAttributes";
import { isSvgRectangleElement } from "@/types/svgRectangleElement";
import { generateRectangleSettings } from "./generateRectangleSettings";
import { generateImgSettings } from "./generateImgSettings";
import { generateTextSettings } from "./generateTextSettings";
import { generateCircleSettings } from "./generateCircleSettings";
import NumberInput from "@/components/numberInput";
import { isSvgPatternElement } from "@/types/svgPatternElement";
import { generatePatternSettings } from "./generatePatternSettings";
import { getAnimatableAttributes } from "../getAnimatableAttributes";

export const mapSettingsElement = (
  element: SvgElement,
  onChange: Function,
  onDelete: Function
) => {
  let animAttr: AnimatableAttributeValue[] = getAnimatableAttributes(element);
  let typeSpecificInput = null;
  let elementName = "Element";
  const animationSettings = (element.animations ?? []).map((animation, index) =>
    mapSettingAnimation(animation, index, element, onChange)
  );
  if (isSvgImgElement(element)) {
    elementName = "Image";
    typeSpecificInput = generateImgSettings(element, onChange, onDelete);
  } else if (isSvgPatternElement(element)) {
    elementName = "Pattern";
    typeSpecificInput = generatePatternSettings(element, onChange, onDelete);
  } else if (isSvgTextElement(element)) {
    elementName = "Text";
    typeSpecificInput = generateTextSettings(element, onChange, onDelete);
  } else if (isSvgCircleElement(element)) {
    elementName = "Circle";
    typeSpecificInput = generateCircleSettings(element, onChange, onDelete);
  } else if (isSvgRectangleElement(element)) {
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
      <details>
        <summary className="cursor-pointer">
          <h6 className="text-lg font-bold inline">Transform</h6>
        </summary>
        <div className="flex flex-col gap-4 mt-4">
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.rotation ?? 0}
            label="Rotation"
            max={360}
            min={-360}
            onChange={(value: number) =>
              onChange({ ...element, rotation: value })
            }
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.rotationOffsetX ?? 0}
            label="Rotation Offset X"
            max={360}
            min={-360}
            onChange={(value: number) =>
              onChange({ ...element, rotationOffsetX: value })
            }
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.rotationOffsetY ?? 0}
            label="Rotation Offset Y"
            max={360}
            min={-360}
            onChange={(value: number) =>
              onChange({ ...element, rotationOffsetY: value })
            }
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.skewX ?? 0}
            label="Skew X"
            max={90}
            min={-90}
            onChange={(value: number) => onChange({ ...element, skewX: value })}
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.skewY ?? 0}
            label="Skew Y"
            max={90}
            min={-90}
            onChange={(value: number) => onChange({ ...element, skewY: value })}
          />
        </div>
      </details>
      {animationSettings}
      <div className="flex flex-row gap-4 w-full">
        <Button
          className="w-full"
          label="+ Animation"
          onClick={() =>
            onChange({
              ...element,
              animations: [
                ...(element.animations ?? []),
                {
                  attributeName: animAttr[0].text,
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
          className="w-full"
          label="&#128465; Delete Element"
          onClick={() => onDelete(element.index)}
          color="rose"
        />
      </div>
    </form>
  );
};
