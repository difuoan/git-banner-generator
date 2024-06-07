import StringInput from "@/components/stringInput";
import { SvgElement } from "@/types/svgElement";
import { isSvgImgElement } from "@/types/svgImgElement";
import Button from "@/components/button";
import FileInput from "@/components/fileInput";
import { mapSettingAnimation } from "./mapSettingAnimation";
import { isSvgTextElement } from "@/types/svgTextElement";
import NumberInput from "@/components/numberInput";

export const mapSettingsElement = (
  element: SvgElement,
  onChange: Function,
  onDelete: Function
) => {
  let typeSpecificInput = null;
  let elementName = "Element";
  const animationSettings = (element.animations ?? []).map((animation, index) =>
    mapSettingAnimation(animation, index, element, onChange)
  );
  if (isSvgImgElement(element)) {
    elementName = "Image";
    typeSpecificInput = (
      <>
        <FileInput
          keyVal={element.index + (element?.name ?? "")}
          onFileUpload={(val: string) => {
            onChange({ ...element, src: val });
          }}
        />
        <details>
          <summary className="cursor-pointer">
            <h6 className="text-lg font-bold dark:text-white inline">Scale</h6>
          </summary>
          <div className="flex flex-col gap-4" style={{ marginTop: "1rem" }}>
            <div className="flex flex-row">
              <NumberInput
                keyVal={element.index + (element.name ?? "")}
                value={element.width ?? 0}
                label="Width"
                max={1500}
                min={0}
                onChange={(value: number) =>
                  onChange({ ...element, width: value })
                }
                className="w-full mr-8"
              />
              <Button
                label="&#128465;"
                onClick={() => {
                  const { width, ...newEle } = element;
                  onChange({ ...newEle });
                }}
                color="rose"
              />
            </div>
            <div className="flex flex-row">
              <NumberInput
                keyVal={element.index + (element.name ?? "")}
                value={element.height ?? 0}
                label="Height"
                max={500}
                min={0}
                onChange={(value: number) =>
                  onChange({ ...element, height: value })
                }
                className="w-full mr-8"
              />
              <Button
                label="&#128465;"
                onClick={() => {
                  const { height, ...newEle } = element;
                  onChange({ ...newEle });
                }}
                color="rose"
              />
            </div>
          </div>
        </details>
      </>
    );
  } else if (isSvgTextElement(element)) {
    elementName = "Text";
    typeSpecificInput = (
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
            <h6 className="text-lg font-bold dark:text-white inline">Style</h6>
          </summary>
          <div className="flex flex-col gap-4" style={{ marginTop: "1rem" }}>
            <StringInput
              keyVal={element.index + (element?.name ?? "")}
              value={element["color"] ?? ""}
              label="Color"
              onChange={(val: string) => {
                onChange({ ...element, color: val });
              }}
            />
            <StringInput
              keyVal={element.index + (element?.name ?? "")}
              value={element["fontFamily"] ?? ""}
              label="Font"
              onChange={(val: string) => {
                onChange({ ...element, fontFamily: val });
              }}
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
      {animationSettings}
      <Button
        label="+ Animation"
        onClick={() =>
          onChange({
            ...element,
            animations: [
              ...(element.animations ?? []),
              {
                attributeName: "x",
                from: 0,
                to: 0,
                dur: 0,
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
