import StringInput from "@/components/stringInput";
import { SvgElement } from "@/types/svgElement";
import { isSvgTextElement } from "@/types/svgTextElement";

export const mapSettingsElement = (
  element: SvgElement,
  index: number,
  onChange: Function
) => {
  let content = null;
  let title = "Element";
  if (isSvgTextElement(element)) {
    content = (
      <StringInput
        value={element["text"]}
        label="Text"
        onChange={(value: string) => onChange({ ...element, text: value })}
      />
    );
    title = "Text Element " + element.index;
  }
  return (
    <div
      className="flex flex-col gap-4 border border-gray-400 p-8 rounded"
      key={index}
    >
      <h6 className="text-lg font-bold dark:text-white">{title}</h6>
      {content}
      <StringInput
        value={element["style"]}
        label="Style"
        onChange={(value: string) => onChange({ ...element, style: value })}
      />
    </div>
  );
};