import NumberInput from "@/components/numberInput";
import ColorInput from "@/components/colorInput";
import { SvgRectangleElement } from "@/types/svgRectangleElement";

export const generateRectangleSettings = (
  element: SvgRectangleElement,
  onChange: Function,
  _onDelete: Function
) => {
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
      <details>
        <summary className="cursor-pointer">
          <h6 className="text-lg font-bold inline">Position & Size</h6>
        </summary>
        <div className="flex flex-col gap-4 mt-4">
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.x ?? 0}
            label="Position X"
            max={1500}
            min={-1500}
            onChange={(value: number) => onChange({ ...element, x: value })}
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.y ?? 0}
            label="Position Y"
            max={500}
            min={-500}
            onChange={(value: number) => onChange({ ...element, y: value })}
          />
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
