import { Preset } from "@/types/preset";
import { tjv1 } from "./preset/tjv1";
import { tjv2 } from "./preset/tjv2";
import { tjv3 } from "./preset/tjv3";
import { ljvBackground } from "./preset/ljvBackground";
import { izzy } from "./preset/izzy";
import { ljvVenCode } from "./preset/ljvVenCode";
import { ljvHello } from "./preset/ljvHello";
import { ljvName } from "./preset/ljvName";
import { ljvIM } from "./preset/ljvIM";
import { ljvLastName } from "./preset/ljvLastName";

export const presets: Preset[] = [
  {
    background: "#fec039",
    elements: [
      {
        index: 1,
        src: ljvBackground,
        name: "Background",
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0,
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
        x: 0,
        y: 0,
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
        x: 0,
        y: 0,
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
        x: 0,
        y: 0,
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
        x: 0,
        y: 0,
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
        x: 0,
        y: 0,
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
    background: "#000000",
    elements: [
      {
        x: 0,
        y: 0,
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
        x: 0,
        y: 0,
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
        x: 0,
        y: 0,
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
