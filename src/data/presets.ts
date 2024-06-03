import { Preset } from "@/types/preset";

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
                src: "data:image/png;base64,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",
            },
        ],
        background: "transparent",
        height: 200,
        width: 800
    },
];