import NumberInput from "@/components/numberInput";
import Select from "@/components/select";
import { fontFamilies } from "@/types/fonts";
import ColorInput from "@/components/colorInput";
import TextArea from "@/components/textArea";
import Button from "@/components/button";
import { SvgTextElement } from "@/types/svgTextElement";

export const generateTextSettings = (
  element: SvgTextElement,
  onChange: Function,
  _onDelete: Function
) => {
  return (
    <>
      <TextArea
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
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-row gap-4">
            <NumberInput
              keyVal={element.index + (element.name ?? "")}
              value={element.dx ?? 0}
              label="DX"
              max={500}
              min={-500}
              onChange={(value: number) => onChange({ ...element, dx: value })}
              className="w-full mr-8"
            />
            <Button
              label="&#128465;"
              onClick={() => {
                const { dx, ...newEle } = element;
                onChange({ ...newEle });
              }}
              color="rose"
            />
          </div>
          <div className="flex flex-row gap-4">
            <NumberInput
              keyVal={element.index + (element.name ?? "")}
              value={element.dy ?? 0}
              label="DY"
              max={100}
              min={-100}
              onChange={(value: number) => onChange({ ...element, dy: value })}
              className="w-full mr-8"
            />
            <Button
              label="&#128465;"
              onClick={() => {
                const { dy, ...newEle } = element;
                onChange({ ...newEle });
              }}
              color="rose"
            />
          </div>
        </div>
      </details>
      <details>
        <summary className="cursor-pointer">
          <h6 className="text-lg font-bold dark:text-white inline">Style</h6>
        </summary>
        <div className="flex flex-col gap-4 mt-4">
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
