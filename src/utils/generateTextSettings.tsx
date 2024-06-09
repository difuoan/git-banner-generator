import NumberInput from "@/components/numberInput";
import StringInput from "@/components/stringInput";
import Select from "@/components/select";
import { fontFamilies } from "@/types/fonts";
import ColorInput from "@/components/colorInput";

export const generateTextSettings = (
  element: SvgElement,
  onChange: Function,
  onDelete: Function
) => {
  return (
    <>
      <StringInput
        keyVal={element.index + (element?.name ?? "")}
        value={element["text"] ?? ""}
        label="Text"
        onChange={(val: string) => {
          onChange({ ...element, text: val });
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
          <h6 className="text-lg font-bold dark:text-white inline">Style</h6>
        </summary>
        <div className="flex flex-col gap-4" style={{ marginTop: "1rem" }}>
          <ColorInput
            keyVal={element.index + (element?.name ?? "")}
            value={element["color"] ?? ""}
            label="Color"
            onChange={(val: string) => {
              onChange({ ...element, color: val });
            }}
          />
          <Select
            keyVal={element.index + (element?.name ?? "")}
            label="Font"
            options={Object.keys(fontFamilies).sort()}
            value={element.fontFamily ?? "Impact"}
            onChange={(value: string) =>
              onChange({
                ...element,
                fontFamily: value,
              })
            }
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "")}
            value={element.fontSize ?? 0}
            label="Size"
            max={100}
            min={1}
            onChange={(value: number) =>
              onChange({ ...element, fontSize: value })
            }
          />
        </div>
      </details>
    </>
  );
};
