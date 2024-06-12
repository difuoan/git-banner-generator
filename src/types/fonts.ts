import { tiny } from "@/data/fonts/tiny";
import { gwenReg } from "@/data/fonts/gwenReg";
import { gwenBol } from "@/data/fonts/gwenBol";
import { roboBlack } from "@/data/fonts/roboBlack";
import { roboBlackIta } from "@/data/fonts/roboBlackIta";
import { robotoBold } from "@/data/fonts/robotoBold";
import { robotoBoldItalic } from "@/data/fonts/robotoBoldItalic";
import { robotoItalic } from "@/data/fonts/robotoItalic";
import { robotoLight } from "@/data/fonts/robotoLight";
import { robotoLightItalic } from "@/data/fonts/robotoLightItalic";
import { robotoMedium } from "@/data/fonts/robotoMedium";
import { robotoMediumItalic } from "@/data/fonts/robotoMediumItalic";
import { robotoRegular } from "@/data/fonts/robotoRegular";
import { robotoThin } from "@/data/fonts/robotoThin";
import { robotoThinItalic } from "@/data/fonts/robotoThinItalic";
import { openSans } from "@/data/fonts/openSans";
import { openSansItalic } from "@/data/fonts/openSansItalic";
import { ptSansNarrowBold } from "@/data/fonts/ptSansNarrowBold";
import { ptSansNarrowRegular } from "@/data/fonts/ptSansNarrowRegular";
import { dancingScript } from "@/data/fonts/dancingScript";
import { sourceCodePro } from "@/data/fonts/sourceCodePro";
import { sourceCodeProItalic } from "@/data/fonts/sourceCodeProItalic";
import { bitter } from "@/data/fonts/bitter";
import { bitterItalic } from "@/data/fonts/bitterItalic";
import { spiceyRice } from "@/data/fonts/spiceyRice";
import { libreBarcode } from "@/data/fonts/libraBarcode";
import { pacifico } from "@/data/fonts/pacifico";
import { dmSerifDisplayItalic } from "@/data/fonts/dmSerifDisplayItalic";
import { dmSerifDisplay } from "@/data/fonts/dmSerifDisplay";
import { ChakraPetchBold } from "@/data/fonts/ChakraPetch-Bold";
import { ChakraPetchBoldItalic } from "@/data/fonts/ChakraPetch-BoldItalic";
import { ChakraPetchItalic } from "@/data/fonts/ChakraPetch-Italic";
import { ChakraPetchLight } from "@/data/fonts/ChakraPetch-Light";
import { ChakraPetchLightItalic } from "@/data/fonts/ChakraPetch-LightItalic";
import { ChakraPetchMedium } from "@/data/fonts/ChakraPetch-Medium";
import { ChakraPetchMediumItalic } from "@/data/fonts/ChakraPetch-MediumItalic";
import { ChakraPetchRegular } from "@/data/fonts/ChakraPetch-Regular";
import { ChakraPetchSemiBold } from "@/data/fonts/ChakraPetch-SemiBold";
import { ChakraPetchSemiBoldItalic } from "@/data/fonts/ChakraPetch-SemiBoldItalic";
import { Jacquard12Regular } from "@/data/fonts/Jacquard12-Regular";
import { Lobster } from "@/data/fonts/Lobster";
import { Danfo } from "@/data/fonts/Danfo";
import { ArchivoBlack } from "@/data/fonts/ArchivoBlack";
import { Caveat } from "@/data/fonts/Caveat";
import { BellotaBold } from "@/data/fonts/Bellota-Bold";
import { BellotaBoldItalic } from "@/data/fonts/Bellota-BoldItalic";
import { BellotaItalic } from "@/data/fonts/Bellota-Italic";
import { BellotaLight } from "@/data/fonts/Bellota-Light";
import { BellotaLightItalic } from "@/data/fonts/Bellota-LightItalic";
import { Bellota } from "@/data/fonts/Bellota";
import { VarelaRound } from "@/data/fonts/VarelaRound";
import { ShadowsIntoLight } from "@/data/fonts/ShadowsIntoLight";
import { PermanentMarker } from "@/data/fonts/PermanentMarker";
import { AbrilFatface } from "@/data/fonts/AbrilFatface";
import { RowdiesBold } from "@/data/fonts/Rowdies-Bold";
import { RowdiesLight } from "@/data/fonts/Rowdies-Light";
import { Rowdies } from "@/data/fonts/Rowdies";
import { IndieFlower } from "@/data/fonts/IndieFlower";
import { ZenDots } from "@/data/fonts/ZenDots";
import { Cinzel } from "@/data/fonts/Cinzel";
import { Exo } from "@/data/fonts/Exo";
import { ExoItalic } from "@/data/fonts/Exo-Italic";
import { SedanSC } from "@/data/fonts/SedanSC";
import { AmaticSCBold } from "@/data/fonts/AmaticSC-Bold";
import { AmaticSC } from "@/data/fonts/AmaticSC";
import { PoetsenOne } from "@/data/fonts/PoetsenOne";
import { GreatVibes } from "@/data/fonts/GreatVibes";

export type Font =
    | "Tiny"
    | "Gwendolyn"
    | "Gwendolyn-Bold"
    | "Roboto-Black"
    | "Roboto-BlackItalic"
    | "Roboto-Bold"
    | "Roboto-BoldItalic"
    | "Roboto-Italic"
    | "Roboto-Light"
    | "Roboto-LightItalic"
    | "Roboto-Medium"
    | "Roboto-MediumItalic"
    | "Roboto"
    | "Roboto-Thin"
    | "Roboto-ThinItalic"
    | "OpenSans"
    | "OpenSans-Italic"
    | "PtSansNarrow-Bold"
    | "PtSansNarrow"
    | "DancingScript"
    | "SourceCodePro"
    | "SourceCodePro-Italic"
    | "Bitter"
    | "Bitter-Italic"
    | "SpicyRice"
    | "LibreBarcode"
    | "Pacifico"
    | "DmSerifDisplay-Italic"
    | "DmSerifDisplay"
    | "ChakraPetch-Bold"
    | "ChakraPetch-BoldItalic"
    | "ChakraPetch-Italic"
    | "ChakraPetch-Light"
    | "ChakraPetch-LightItalic"
    | "ChakraPetch-Medium"
    | "ChakraPetch-MediumItalic"
    | "ChakraPetch"
    | "ChakraPetch-SemiBold"
    | "PermanentMarker"
    | "ChakraPetch-SemiBoldItalic"
    | "Jacquard12"
    | "Lobster"
    | "Danfo"
    | "ArchivoBlack"
    | "Caveat"
    | "Bellota-Bold"
    | "Bellota-BoldItalic"
    | "Bellota-Italic"
    | "Bellota-Light"
    | "Bellota-LightItalic"
    | "Bellota"
    | "VarelaRound"
    | "ShadowsIntoLight"
    | "AbrilFatface"
    | "Rowdies-Bold"
    | "Rowdies-Light"
    | "AmaticSC"
    | "GreatVibes"
    | "Rowdies"
    | "IndieFlower"
    | "ZenDots"
    | "Cinzel"
    | "Exo"
    | "Exo-Italic"
    | "SedanSC"
    | "AmaticSC-Bold"
    | "PoetsenOne";

export type Fonts = Record<Font, string>;

export const fontFamilies: Fonts = {
    GreatVibes: GreatVibes,
    PoetsenOne: PoetsenOne,
    AmaticSC: AmaticSC,
    "AmaticSC-Bold": AmaticSCBold,
    SedanSC: SedanSC,
    "Exo-Italic": ExoItalic,
    Exo: Exo,
    Cinzel: Cinzel,
    ZenDots: ZenDots,
    IndieFlower: IndieFlower,
    "Rowdies-Light": RowdiesLight,
    Rowdies: Rowdies,
    "Rowdies-Bold": RowdiesBold,
    AbrilFatface: AbrilFatface,
    PermanentMarker: PermanentMarker,
    ShadowsIntoLight: ShadowsIntoLight,
    VarelaRound: VarelaRound,
    Bellota: Bellota,
    "Bellota-LightItalic": BellotaLightItalic,
    "Bellota-Light": BellotaLight,
    "Bellota-Italic": BellotaItalic,
    "Bellota-BoldItalic": BellotaBoldItalic,
    "Bellota-Bold": BellotaBold,
    Caveat: Caveat,
    ArchivoBlack: ArchivoBlack,
    Danfo: Danfo,
    Lobster: Lobster,
    Jacquard12: Jacquard12Regular,
    "ChakraPetch-SemiBoldItalic": ChakraPetchSemiBoldItalic,
    "ChakraPetch-SemiBold": ChakraPetchSemiBold,
    ChakraPetch: ChakraPetchRegular,
    "ChakraPetch-MediumItalic": ChakraPetchMediumItalic,
    "ChakraPetch-Medium": ChakraPetchMedium,
    "ChakraPetch-LightItalic": ChakraPetchLightItalic,
    "ChakraPetch-Light": ChakraPetchLight,
    "ChakraPetch-Italic": ChakraPetchItalic,
    "ChakraPetch-BoldItalic": ChakraPetchBoldItalic,
    "ChakraPetch-Bold": ChakraPetchBold,
    DmSerifDisplay: dmSerifDisplay,
    "DmSerifDisplay-Italic": dmSerifDisplayItalic,
    Tiny: tiny,
    Gwendolyn: gwenReg,
    "Gwendolyn-Bold": gwenBol,
    "Roboto-Black": roboBlack,
    "Roboto-BlackItalic": roboBlackIta,
    "Roboto-Bold": robotoBold,
    "Roboto-BoldItalic": robotoBoldItalic,
    "Roboto-Italic": robotoItalic,
    "Roboto-Light": robotoLight,
    "Roboto-LightItalic": robotoLightItalic,
    "Roboto-Medium": robotoMedium,
    "Roboto-MediumItalic": robotoMediumItalic,
    Roboto: robotoRegular,
    "Roboto-Thin": robotoThin,
    "Roboto-ThinItalic": robotoThinItalic,
    OpenSans: openSans,
    "OpenSans-Italic": openSansItalic,
    "PtSansNarrow-Bold": ptSansNarrowBold,
    PtSansNarrow: ptSansNarrowRegular,
    DancingScript: dancingScript,
    SourceCodePro: sourceCodePro,
    "SourceCodePro-Italic": sourceCodeProItalic,
    Bitter: bitter,
    "Bitter-Italic": bitterItalic,
    SpicyRice: spiceyRice,
    LibreBarcode: libreBarcode,
    Pacifico: pacifico,
};
