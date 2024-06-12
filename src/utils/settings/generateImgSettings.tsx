import { SvgImgElement } from "@/types/svgImgElement";
import Button from "@/components/button";
import FileInput from "@/components/fileInput";
import NumberInput from "@/components/numberInput";
import { getImageDimensions } from "../getImageDimensions";

export const generateImgSettings = (
  element: SvgImgElement,
  onChange: Function,
  _onDelete: Function
) => {
  return (
    <>
      <FileInput
        keyVal={element.index + (element?.name ?? "")}
        onFileUpload={async (val: string) => {
          const dimensions = await getImageDimensions(val);
          onChange({
            ...element,
            src: val,
            width: dimensions.x,
            height: dimensions.y,
          });
        }}
      />
      <details>
        <summary className="cursor-pointer">
          <h6 className="text-lg font-bold inline">Position & Scale</h6>
        </summary>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-row gap-4">
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
          <div className="flex flex-row gap-4">
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
        </div>
      </details>
    </>
  );
};
