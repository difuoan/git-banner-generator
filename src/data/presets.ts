import { Preset } from "@/types/preset";
import { tjv1 } from "./tjv1";
import { tjv2 } from "./tjv2";
import { tjv3 } from "./tjv3";
import { ljvBackground } from "./ljvBackground";
import { izzy } from "./izzy";
import { ljvVenCode } from "./ljvVenCode";
import { ljvHello } from "./ljvHello";
import { ljvName } from "./ljvName";
import { ljvIM } from "./ljvIM";
import { ljvLastName } from "./ljvLastName";

export const presets: Preset[] = [
  {
    elements: [
      {
        index: 1,
        src: ljvBackground,
        name: "Background",
        animations: [],
      },
      {
        index: 2,
        src: izzy,
        name: "Izzy",
        animations: [
          {
            attributeName: "x",
            from: -1500,
            to: -1500,
            dur: 4,
            begin: 0,
            repeatCount: 1,
            keySplines: "ease-out",
          },
          {
            attributeName: "x",
            from: -1500,
            to: 0,
            dur: 2,
            begin: 4,
            repeatCount: 1,
            keySplines: "ease-out",
          },
        ],
      },
      {
        index: 3,
        src: ljvVenCode,
        name: "venturini.codes",
        animations: [
          {
            attributeName: "y",
            from: 500,
            to: 500,
            dur: 6,
            begin: 0,
            repeatCount: 1,
            keySplines: "ease-out",
          },
          {
            attributeName: "y",
            from: 500,
            to: 0,
            dur: 1,
            begin: 6,
            repeatCount: 1,
            keySplines: "ease-out",
          },
        ],
      },
      {
        index: 4,
        src: ljvHello,
        name: "Hello World!",
        animations: [
          {
            attributeName: "x",
            from: -1500,
            to: 0,
            dur: 1,
            begin: 0,
            repeatCount: 1,
            keySplines: "ease-out",
          },
        ],
      },
      {
        index: 5,
        src: ljvName,
        name: "Lucas",
        animations: [
          {
            attributeName: "x",
            from: -1500,
            to: -1500,
            dur: 1.5,
            begin: 0,
            repeatCount: 1,
            keySplines: "ease-out",
          },
          {
            attributeName: "x",
            from: -1500,
            to: 0,
            dur: 1,
            begin: 1.5,
            repeatCount: 1,
            keySplines: "ease-out",
          },
        ],
      },
      {
        index: 6,
        src: ljvIM,
        name: "I'm",
        animations: [
          {
            attributeName: "x",
            from: -1500,
            to: -1500,
            dur: 0.5,
            begin: 0,
            repeatCount: 1,
            keySplines: "ease-out",
          },
          {
            attributeName: "x",
            from: -1500,
            to: 0,
            dur: 1,
            begin: 0.5,
            repeatCount: 1,
            keySplines: "ease-out",
          },
        ],
      },
      {
        index: 7,
        src: ljvLastName,
        name: "J. Venturini",
        animations: [
          {
            attributeName: "x",
            from: -1500,
            to: -1500,
            dur: 2.5,
            begin: 0,
            repeatCount: 1,
            keySplines: "ease-out",
          },
          {
            attributeName: "x",
            from: -1500,
            to: 0,
            dur: 1,
            begin: 2.5,
            repeatCount: 1,
            keySplines: "ease-out",
          },
        ],
      },
    ],
    height: 500,
    width: 1500,
    src: "/ljvBanner.svg",
  },
  {
    src: "/tjvBanner.svg",
    elements: [
      {
        name: "venturini.codes",
        index: 1,
        src: tjv1,
        animations: [
          {
            attributeName: "y",
            from: -500,
            to: -500,
            dur: 1,
            begin: 0,
            repeatCount: 1,
            keySplines: "ease-out",
          },
          {
            attributeName: "y",
            from: -500,
            to: 0,
            dur: 1,
            begin: 1,
            repeatCount: 1,
            keySplines: "ease-out",
          },
        ],
      },
      {
        name: "thomasventurini.com",
        index: 2,
        src: tjv2,
        animations: [
          {
            attributeName: "x",
            from: -1500,
            to: -1500,
            dur: 2,
            begin: 0,
            repeatCount: 1,
            keySplines: "ease-out",
          },
          {
            attributeName: "x",
            from: -1500,
            to: 0,
            dur: 1,
            begin: 2,
            repeatCount: 1,
            keySplines: "ease-out",
          },
        ],
      },
      {
        name: "edward",
        index: 3,
        src: tjv3,
        animations: [
          {
            attributeName: "y",
            from: 500,
            to: 500,
            dur: 3,
            begin: 0,
            repeatCount: 1,
            keySplines: "ease-out",
          },
          {
            attributeName: "y",
            from: 500,
            to: 0,
            dur: 1,
            begin: 3,
            repeatCount: 1,
            keySplines: "ease-out",
          },
        ],
      },
    ],
    height: 500,
    width: 1500,
  },
];
