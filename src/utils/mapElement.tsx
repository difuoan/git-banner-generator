import { SvgElement } from "@/types/svgElement";
import { isSvgTextElement } from "@/types/svgTextElement";

export const mapElement = (element: SvgElement, index: number) => {
  if (isSvgTextElement(element)) {
    return (
      <span
        key={index}
        style={{
          fontSize: element["font-size"],
        }}
      >
        {element.text}
      </span>
    );
  }
};
