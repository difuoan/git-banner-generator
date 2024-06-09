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

export const generateRectangleSettings = (
  element: SvgElement,
  onChange: Function,
  onDelete: Function
) => {
  let elementName = "Rectangle";
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
      <details>
        <summary className="cursor-pointer">
          <h6 className="text-lg font-bold dark:text-white inline">Position</h6>
        </summary>
        <div className="flex flex-col gap-4" style={{ marginTop: "1rem" }}>
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.x ?? 0}
            label="X"
            max={1500}
            min={-1500}
            onChange={(value: number) => onChange({ ...element, x: value })}
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.y ?? 0}
            label="Y"
            max={500}
            min={-500}
            onChange={(value: number) => onChange({ ...element, y: value })}
          />
        </div>
      </details>
      <details>
        <summary className="cursor-pointer">
          <h6 className="text-lg font-bold dark:text-white inline">Size</h6>
        </summary>
        <div className="flex flex-col gap-4" style={{ marginTop: "1rem" }}>
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.width ?? 0}
            label="Width"
            max={1500}
            min={0}
            onChange={(value: number) => onChange({ ...element, width: value })}
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.height ?? 0}
            label="Height"
            max={500}
            min={0}
            onChange={(value: number) =>
              onChange({ ...element, height: value })
            }
          />
        </div>
      </details>
      <details>
        <summary className="cursor-pointer">
          <h6 className="text-lg font-bold dark:text-white inline">
            Corner Radius
          </h6>
        </summary>
        <div className="flex flex-col gap-4" style={{ marginTop: "1rem" }}>
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.rx ?? 0}
            label="RX"
            max={100}
            min={0}
            onChange={(value: number) => onChange({ ...element, rx: value })}
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.ry ?? 0}
            label="RY"
            max={100}
            min={0}
            onChange={(value: number) => onChange({ ...element, ry: value })}
          />
        </div>
      </details>
    </>
  );
};
