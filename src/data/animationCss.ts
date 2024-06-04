import { AnimationCss } from "@/types/animationCss";

export const animationCss: AnimationCss = {
    "slide-in-bottom": `.slide-in-bottom-<element-index> {
    animation-name: slide-in-bottom-<element-index>;
    animation-duration: 1s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0s;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
}
@keyframes slide-in-bottom-<element-index> {
    0% {
        transform: translateY(<svg-height>px);
    }
    100% {
        transform: translateY(0px);
    }
}`,
    "slide-in-top": `.slide-in-top-<element-index> {
    animation-name: slide-in-top-<element-index>;
    animation-duration: 1s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0s;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
}
@keyframes slide-in-top-<element-index> {
    0% {
        transform: translateY(-<svg-height>px);
    }
    100% {
        transform: translateY(0px);
    }
}`,
    "slide-in-left": `.slide-in-left-<element-index> {
    animation-name: slide-in-left-<element-index>;
    animation-duration: 1s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0s;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
}
@keyframes slide-in-left-<element-index> {
    0% {
        transform: translateX(-<svg-width>px);
    }
    100% {
        transform: translateX(0px);
    }
}`,
    "slide-in-right": `.slide-in-right-<element-index> {
    animation-name: slide-in-right-<element-index>;
    animation-duration: 1s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0s;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
}
@keyframes slide-in-right-<element-index> {
    0% {
        transform: translateX(<svg-width>px);
    }
    100% {
        transform: translateX(0px);
    }
}`,
    "slide-out-bottom": `.slide-out-bottom-<element-index> {
    animation-name: slide-out-bottom-<element-index>;
    animation-duration: 1s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0s;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
}
@keyframes slide-out-bottom-<element-index> {
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(<svg-height>px);
    }
}`,
    "slide-out-top": `.slide-out-top-<element-index> {
    animation-name: slide-out-top-<element-index>;
    animation-duration: 1s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0s;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
}
@keyframes slide-out-top-<element-index> {
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(-<svg-height>px);
    }
}`,
    "slide-out-left": `.slide-out-left-<element-index> {
    animation-name: slide-out-left-<element-index>;
    animation-duration: 1s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0s;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
}
@keyframes slide-out-left-<element-index> {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(-<svg-width>px);
    }
}`,
    "slide-out-right": `.slide-out-right-<element-index> {
    animation-name: slide-out-right-<element-index>;
    animation-duration: 1s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0s;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
}
@keyframes slide-out-right-<element-index> {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(<svg-width>px);
    }
}`,
    none: ``,
    wiggle: `.wiggle-<element-index> {
    animation-name: wiggle-<element-index>;
    animation-duration: 1s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0s;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
}
@keyframes wiggle-<element-index>  {
    0% {
        transform: rotate( 0.0deg)
    }
    10% {
        transform: rotate(14.0deg)
    }
    20% {
        transform: rotate(-8.0deg)
    }
    30% {
        transform: rotate(14.0deg)
    }
    40% {
        transform: rotate(-4.0deg)
    }
    50% {
        transform: rotate(10.0deg)
    }
    60% {
        transform: rotate( 0.0deg)
    }
    100% {
        transform: rotate( 0.0deg)
    }
}`
};
