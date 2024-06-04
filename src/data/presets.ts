import { Preset } from "@/types/preset";
import { cutout } from "./cutout";

export const presets: Preset[] = [
    {
        src: "/empty.svg",
        elements: [],
        background: "white",
        height: 200,
        width: 800
    },
    {
        src: "/ljvBanner.svg",
        elements: [
            {
                text: "Hello World! I'm Lucas J. Venturini",
                index: 1,
                style: `font-size: 24px;\nfont-weight: bold;\nposition: absolute;\nleft: 100px;\ntop: 80px;\nfont-family: 'Courier New', monospace;`,
                animation: "slide-in-left",
            },
            {
                text: "💡",
                index: 2,
                style: `font-size: 25px;\nposition: absolute;\nright: 25px;\ntop: -6px;\ntransform: rotate(25deg);`,
                animationCss: `.wiggle-2 {
    animation-name: slide-in-right-2, wiggle-2;
    animation-duration: 1s, 1s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0s, 1s;
    animation-direction: normal;
    animation-iteration-count: 1, 5;
    animation-fill-mode: none;
    animation-play-state: running;
}
@keyframes wiggle-2  {
    0% {
        transform: rotate(25deg)
    }
    10% {
        transform: rotate(39deg)
    }
    20% {
        transform: rotate(17deg)
    }
    30% {
        transform: rotate(39deg)
    }
    40% {
        transform: rotate(21deg)
    }
    50% {
        transform: rotate(35deg)
    }
    60% {
        transform: rotate(25deg)
    }
    100% {
        transform: rotate(25deg)
    }
}
@keyframes slide-in-right-2 {
    0% {
        transform: translateX(800px) rotate(25deg);
    }
    100% {
        transform: translateX(0px) rotate(25deg);
    }
}`,
                animation: "wiggle",
            },
            {
                index: 3,
                style: "height: 200px;\nposition: absolute;\nright: 15px;\ntop: 25px",
                animation: "slide-in-bottom",
                src: cutout,
            },
        ],
        background: "transparent",
        height: 200,
        width: 800
    },
];