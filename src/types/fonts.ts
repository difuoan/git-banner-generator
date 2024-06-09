export type Font =
    | "Arial"
    | "Arial Black"
    | "Arial Narrow"
    | "Arial Rounded MT Bold"
    | "Avant Garde"
    | "Calibri"
    | "Candara"
    | "Century Gothic"
    | "Geneva"
    | "Franklin Gothic Medium"
    | "Futura"
    | "Gill Sans"
    | "Helvetica"
    | "Impact"
    | "Garamond"
    | "Georgia"
    | "Goudy Old Style"
    | "Hoefler Text"
    | "Lucida Grande"
    | "Optima"
    | "Segoe UI"
    | "Tahoma"
    | "Trebuchet MS"
    | "Verdana"
    | "Big Caslon"
    | "Bodoni MT"
    | "Book Antiqua"
    | "Calisto MT"
    | "Cambria"
    | "Didot"
    | "Lucida Bright"
    | "Palatino"
    | "Perpetua"
    | "Rockwell"
    | "Rockwell Extra Bold"
    | "Baskerville"
    | "Times New Roman"
    | "Consolas"
    | "Courier New"
    | "Lucida Console"
    | "Lucida Sans Typewriter"
    | "Monaco"
    | "Andale Mono"
    | "Copperplate"
    | "Papyrus"
    | "Brush Script MT";

export const fontFamilies: { [name: Font]: string } = {
    "Brush Script MT": `"Brush Script MT", cursive`,
    Papyrus: `Papyrus, fantasy`,
    Copperplate: `Copperplate, "Copperplate Gothic Light", fantasy`,
    "Andale Mono": `"Andale Mono", AndaleMono, monospace`,
    Monaco: `monaco, Consolas, "Lucida Console", monospace`,
    "Lucida Sans Typewriter": `"Lucida Sans Typewriter", "Lucida Console", monaco, "Bitstream Vera Sans Mono", monospace`,
    "Lucida Console": `"Lucida Console", "Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace`,
    "Courier New": `"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace`,
    Consolas: `Consolas, monaco, monospace`,
    "Times New Roman": `TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif`,
    Baskerville: `Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif`,
    "Rockwell Extra Bold": `"Rockwell Extra Bold", "Rockwell Bold", monospace`,
    Rockwell: `Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif`,
    Perpetua: `Perpetua, Baskerville, "Big Caslon", "Palatino Linotype", Palatino, "URW Palladio L", "Nimbus Roman No9 L", serif`,
    Palatino: `Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif`,
    Arial: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    ArialBlack: `"Arial Black", "Arial Bold", Gadget, sans-serif`,
    "Arial Narrow": `"Arial Narrow", Arial, sans-serif`,
    "Arial Rounded MT Bold": `"Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif`,
    "Avant Garde": `"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-serif`,
    Calibri: `Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif`,
    Candara: `Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif`,
    "Century Gothic": `"Century Gothic", CenturyGothic, AppleGothic, sans-serif`,
    "Franklin Gothic Medium": `"Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", Arial, sans-serif`,
    Futura: `Futura, "Trebuchet MS", Arial, sans-serif`,
    Geneva: `Geneva, Tahoma, Verdana, sans-serif`,
    "Gill Sans": `"Gill Sans", "Gill Sans MT", Calibri, sans-serif`,
    Helvetica: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
    Impact: `Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif"`,
    "Lucida Grande": `"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif`,
    Optima: `Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif`,
    "Segoe UI": `"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif`,
    Tahoma: `Tahoma, Verdana, Segoe, sans-serif`,
    "Trebuchet MS": `"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif`,
    Verdana: "Verdana, Geneva, sans-serif",
    "Big Caslon": `"Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif`,
    "Bodoni MT": `font-family: "Bodoni MT", Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif`,
    "Book Antiqua": `"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif`,
    "Calisto MT": `"Calisto MT", "Bookman Old Style", Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter", Georgia, serif`,
    Cambria: `Cambria, Georgia, serif`,
    Didot: `Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif`,
    Garamond: `Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif`,
    Georgia: `Georgia, Times, "Times New Roman", serif`,
    "Goudy Old Style": `"Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif`,
    "Hoefler Text": `"Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif`,
    "Lucida Bright": `"Lucida Bright", Georgia, serif`,
};
