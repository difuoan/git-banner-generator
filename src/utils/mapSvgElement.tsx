import { SvgElement } from "@/types/svgElement";
import { isSvgTextElement } from "@/types/svgTextElement";
import { parseStyles } from "./parseStyles";

export const mapSvgElement = (element: SvgElement, index: number) => {
  if (isSvgTextElement(element)) {
    return (
      <span
        key={index}
        style={parseStyles(element.style)}
        className={element.animation}
      >
        {element.text}
      </span>
    );
  }
};
