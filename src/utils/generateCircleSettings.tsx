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

export const generateCircleSettings = (
  element: SvgElement,
  onChange: Function,
  onDelete: Function
) => {
  let elementName = "Circle";
  return (
    <>
      <StringInput
        keyVal={element.index + (element?.name ?? "")}
        value={element["fill"] ?? ""}
        label="Color"
        onChange={(val: string) => {
          onChange({ ...element, fill: val });
        }}
      />
      <NumberInput
        keyVal={element.index + (element.name ?? "")}
        value={element.r ?? 0}
        label="Radius"
        max={1000}
        min={-1000}
        onChange={(value: number) => onChange({ ...element, r: value })}
      />
    </>
  );
};
