import { fontFamilies } from "@/types/fonts";
import { SvgElement } from "@/types/svgElement";
import { isSvgTextElement } from "@/types/svgTextElement";

export const mapSvgDefinitions = (element: SvgElement, index: number) => {
  let definition = null;
  if (isSvgTextElement(element)) {
    const base64 = fontFamilies[element.fontFamily];
    const fontFace = `@font-face {
    font-family: '${element.fontFamily}';
    src: url("data:application/x-font-ttf;base64,${base64}");
}`;
    definition = (
      <defs key={element.index}>
        <style type="text/css">{fontFace}</style>
      </defs>
    );
  }
  return definition;
};
