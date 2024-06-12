import { SvgElement } from "@/types/svgElement";
import Button from "@/components/button";
import NumberInput from "@/components/numberInput";
import Select from "@/components/select";
import { SvgAnimation } from "@/types/svgAnimation";
import { AnimatableAttributeValue } from "@/data/animatableAttributes";
import { getAnimatableAttributes } from "../getAnimatableAttributes";

export const mapSettingAnimation = (
  animation: SvgAnimation,
  index: number,
  element: SvgElement,
  onChange: Function
) => {
  let animAttr: AnimatableAttributeValue[] = getAnimatableAttributes(element);
  return (
    <details key={index}>
      <summary className="cursor-pointer">
        <h6 className="text-lg font-bold inline">Animation #{index + 1}</h6>
      </summary>
      <div className="flex flex-col gap-4 mt-4">
        <Select
          keyVal={element.index + (element.name ?? "") + index}
          label="Animation Attribute"
          options={animAttr.map((val) => val.text)}
          value={animation.attributeName ?? animAttr[0].text}
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
          label="From Value"
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
          label="To Value"
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
          label="Duration"
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
          label="Easing"
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
                (_anim, inde) => inde !== index
              ),
            })
          }
          color="rose"
        />
      </div>
    </details>
  );
};
