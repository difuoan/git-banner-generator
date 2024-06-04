import { SvgElement } from "@/types/svgElement";
import { isSvgTextElement } from "@/types/svgTextElement";
import { parseStyles } from "./parseStyles";
import { isSvgImgElement } from "@/types/svgImgElement";

export const mapSvgElement = (element: SvgElement, index: number) => {
  if (isSvgTextElement(element)) {
    return (
      <span
        key={index}
        style={parseStyles(element.style)}
        className={element.animation + "-" + element.index}
      >
        {element.text}
      </span>
    );
  } else if (isSvgImgElement(element)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
      <img
        src={element.src}
        key={index}
        style={parseStyles(element.style)}
        className={element.animation + "-" + element.index}
      />
    );
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
      <div
        key={index}
        style={parseStyles(element.style)}
        className={element.animation + "-" + element.index}
      >
        {/* not really empty */}
      </div>
    );
  }
};
