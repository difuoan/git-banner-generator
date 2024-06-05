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
        background: "transparent",
        elements: [
            {
                index: 1,
                src: ljvBackground,
                style: "position: absolute;",
                name: "Background",
            },
            {
                index: 2,
                src: izzy,
                style: "position: absolute;",
                name: "Izzy",
                animation: "slide-in-left",
                animationCss:
                    ".slide-in-left-<element-index> {\n    animation-name: slide-in-left-<element-index>;\n    animation-duration: 1s; \n    animation-timing-function: ease-in-out; \n    animation-delay: 0s;\n    animation-direction: normal;\n    animation-iteration-count: 1;\n    animation-fill-mode: none;\n    animation-play-state: running;\n}\n@keyframes slide-in-left-<element-index> {\n    0% {\n        transform: translateX(-<svg-width>px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n}",
            },
            {
                index: 3,
                src: ljvVenCode,
                style: "position: absolute;",
                name: "venturini.codes",
                animation: "slide-in-right",
                animationCss:
                    ".slide-in-right-<element-index> {\n    animation-name: slide-in-right-<element-index>;\n    animation-duration: 1s; \n    animation-timing-function: ease-in-out; \n    animation-delay: 0s;\n    animation-direction: normal;\n    animation-iteration-count: 1;\n    animation-fill-mode: none;\n    animation-play-state: running;\n}\n@keyframes slide-in-right-<element-index> {\n    0% {\n        transform: translateX(<svg-width>px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n}",
            },
            {
                index: 4,
                src: ljvHello,
                style: "position: absolute;",
                name: "Hello World!",
                animation: "slide-in-top",
                animationCss:
                    ".slide-in-top-<element-index> {\n    animation-name: slide-in-top-<element-index>;\n    animation-duration: 1s; \n    animation-timing-function: ease-in-out; \n    animation-delay: 0s;\n    animation-direction: normal;\n    animation-iteration-count: 1;\n    animation-fill-mode: none;\n    animation-play-state: running;\n}\n@keyframes slide-in-top-<element-index> {\n    0% {\n        transform: translateY(-<svg-height>px);\n    }\n    100% {\n        transform: translateY(0px);\n    }\n}",
            },
            {
                index: 5,
                src: ljvName,
                style: "position: absolute;",
                name: "Lucas",
                animation: "slide-in-left",
                animationCss:
                    ".slide-in-left-<element-index> {\n    animation-name: slide-in-left-<element-index>;\n    animation-duration: 1s; \n    animation-timing-function: ease-in-out; \n    animation-delay: 0s;\n    animation-direction: normal;\n    animation-iteration-count: 1;\n    animation-fill-mode: none;\n    animation-play-state: running;\n}\n@keyframes slide-in-left-<element-index> {\n    0% {\n        transform: translateX(-<svg-width>px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n}",
            },
            {
                index: 6,
                src: ljvIM,
                style: "position: absolute;",
                name: "I'm",
                animation: "slide-in-left",
                animationCss:
                    ".slide-in-left-<element-index> {\n    animation-name: slide-in-left-<element-index>;\n    animation-duration: 1s; \n    animation-timing-function: ease-in-out; \n    animation-delay: 0s;\n    animation-direction: normal;\n    animation-iteration-count: 1;\n    animation-fill-mode: none;\n    animation-play-state: running;\n}\n@keyframes slide-in-left-<element-index> {\n    0% {\n        transform: translateX(-<svg-width>px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n}",
            },
            {
                index: 7,
                src: ljvLastName,
                style: "position: absolute;",
                name: "J. Venturini",
                animation: "slide-in-bottom",
                animationCss:
                    ".slide-in-bottom-<element-index> {\n    animation-name: slide-in-bottom-<element-index>;\n    animation-duration: 1s; \n    animation-timing-function: ease-in-out; \n    animation-delay: 0s;\n    animation-direction: normal;\n    animation-iteration-count: 1;\n    animation-fill-mode: none;\n    animation-play-state: running;\n}\n@keyframes slide-in-bottom-<element-index> {\n    0% {\n        transform: translateY(<svg-height>px);\n    }\n    100% {\n        transform: translateY(0px);\n    }\n}",
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
                style: "position: absolute;",
                animation: "slide-in-top",
            },
            {
                name: "thomasventurini.com",
                index: 2,
                src: tjv2,
                style: "position: absolute;",
                animation: "slide-in-left",
            },
            {
                name: "edward",
                index: 3,
                src: tjv3,
                style: "position: absolute;",
                animation: "slide-in-bottom",
            },
        ],
        background: "black",
        height: 500,
        width: 1500,
    },
];
