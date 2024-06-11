import NumberInput from "@/components/numberInput";
import ColorInput from "@/components/colorInput";
import { SvgCircleElement } from "@/types/svgCircleElement";

export const generateCircleSettings = (
  element: SvgCircleElement,
  onChange: Function,
  _onDelete: Function
) => {
  let elementName = "Circle";
  return (
    <>
      <ColorInput
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
        min={0}
        onChange={(value: number) => onChange({ ...element, r: value })}
      />
      <details>
        <summary className="cursor-pointer">
          <h6 className="text-lg font-bold dark:text-white inline">Position</h6>
        </summary>
        <div className="flex flex-col gap-4 mt-4">
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.cx ?? 0}
            label="X"
            max={1500}
            min={-1500}
            onChange={(value: number) => onChange({ ...element, cx: value })}
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.cy ?? 0}
            label="Y"
            max={500}
            min={-500}
            onChange={(value: number) => onChange({ ...element, cy: value })}
          />
        </div>
      </details>
    </>
  );
};
