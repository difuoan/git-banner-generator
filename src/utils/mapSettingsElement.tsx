import StringInput from "@/components/stringInput";
import { SvgAnimation, SvgElement } from "@/types/svgElement";
import { isSvgImgElement } from "@/types/svgImgElement";
import Button from "@/components/button";
import FileInput from "@/components/fileInput";
import NumberInput from "@/components/numberInput";
import Select from "@/components/select";

export const mapSettingsElement = (
  element: SvgElement,
  index: number,
  onChange: Function,
  svgHeight: number,
  svgWidth: number,
  onDelete: Function
) => {
  let typeSpecificInput = null;
  let elementName = "Element";
  const animationSettings = (element.animations ?? []).map(
    (animation: SvgAnimation, index) => {
      return (
        <div key={index} className="flex flex-col gap-4">
          <h6 className="text-lg font-bold dark:text-white">
            Animation #{index + 1}
          </h6>
          <Select
            keyVal={element.index + (element.name ?? "") + index}
            label="Anim"
            options={["x", "y"]}
            value={animation.attributeName ?? "x"}
            onChange={(value: number) =>
              onChange({
                ...element,
                animations: element.animations?.map((anim, inde) => {
                  if (inde === index) return { ...anim, attributeName: value };
                  return anim;
                }),
              })
            }
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "") + index}
            value={animation.from ?? 0}
            label="From"
            max={1000}
            min={-1000}
            onChange={(value: number) =>
              onChange({
                ...element,
                animations: element.animations?.map((anim, inde) => {
                  if (inde === index) return { ...anim, from: value };
                  return anim;
                }),
              })
            }
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "") + index}
            value={animation.to ?? 0}
            label="To"
            max={1000}
            min={-1000}
            onChange={(value: number) =>
              onChange({
                ...element,
                animations: element.animations?.map((anim, inde) => {
                  if (inde === index) return { ...anim, to: value };
                  return anim;
                }),
              })
            }
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "") + index}
            value={animation.dur ?? 0}
            label="Dur"
            max={10}
            min={0}
            onChange={(value: number) =>
              onChange({
                ...element,
                animations: element.animations?.map((anim, inde) => {
                  if (inde === index) return { ...anim, dur: value };
                  return anim;
                }),
              })
            }
          />
          <NumberInput
            keyVal={element.index + (element.name ?? "") + index}
            value={animation.begin ?? 0}
            label="Begin"
            max={10}
            min={0}
            onChange={(value: number) =>
              onChange({
                ...element,
                animations: element.animations?.map((anim, inde) => {
                  if (inde === index) return { ...anim, begin: value };
                  return anim;
                }),
              })
            }
          />
          <Select
            keyVal={element.index + (element.name ?? "") + index}
            label="Mode"
            options={["linear", "ease-in", "ease-out", "ease-in-out"]}
            value={animation.keySplines ?? "linear"}
            onChange={(value: number) =>
              onChange({
                ...element,
                animations: element.animations?.map((anim, inde) => {
                  if (inde === index) return { ...anim, keySplines: value };
                  return anim;
                }),
              })
            }
          />
          <Button
            label="&#128465; Delete Animation"
            onClick={() =>
              onChange({
                ...element,
                animations: element.animations?.filter(
                  (anim, inde) => inde !== index
                ),
              })
            }
            color="rose"
          />
        </div>
      );
    }
  );
  if (isSvgImgElement(element)) {
    elementName = "Image";
    typeSpecificInput = (
      <FileInput
        keyVal={element.index + (element?.name ?? "")}
        onFileUpload={(val: string) => {
          onChange({ ...element, src: val });
        }}
      />
    );
  }
  return (
    <form
      className="flex flex-col gap-4 border border-gray-400 p-8 rounded resize-x"
      style={{ overflow: "auto", position: "relative" }}
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
