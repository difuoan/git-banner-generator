import { AnimateElement, Canvg } from "canvg";
import GIF from "gif.js";
import { RefObject } from "react";
import { downloadBlob } from "./downloadBlob";
import BezierEasing from 'bezier-easing';

export const convertSVGToGIF = async (svgContainer: RefObject<HTMLDivElement>, svgWidth: number, svgHeight: number, _svgBackground: string, callbackFunction?: Function) => {
    const svgText = svgContainer.current?.innerHTML;
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = svgWidth;
    canvas.height = svgHeight;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context || !svgText) return;
    const gif = new GIF({
        workers: 10,
        quality: 1,
        width: svgWidth,
        height: svgHeight,
        repeat: -1,
    });

    const canvgInstance = await Canvg.from(context, svgText, {
        ignoreAnimation: true,
        ignoreMouse: true,
    });

    const allAnimationsDone: boolean[] = [];
    let millisecond: number = 0;
    const fps = 30;
    const millisecondsPerFrame = 1000 / fps;
    const renderFrame = async function () {
        canvgInstance.screen.animations.forEach((a, i) => {
            const anim = a as AnimateElement & { duration: number, maxDuration: number }

            // @ts-ignore
            const keySplines = anim.attributes.keySplines.value.split(' ').map(Number);
            const easingFunction = BezierEasing(keySplines[0], keySplines[1], keySplines[2], keySplines[3]);

            if (millisecond >= anim.maxDuration) {
                if (!allAnimationsDone[i]) {
                    allAnimationsDone[i] = true;
                    anim.duration = anim.maxDuration;
                }
            } else if (!allAnimationsDone[i]) {
                allAnimationsDone[i] = false;
                const progress = millisecond / anim.maxDuration;
                const easedProgress = easingFunction(progress);
                anim.update(anim.maxDuration * easedProgress - anim.duration);
            }
        });
        await canvgInstance.render();
        gif.addFrame(context, {
            copy: true,
            delay: millisecondsPerFrame,
        });
        millisecond += millisecondsPerFrame;
        if (!allAnimationsDone.every((d) => !!d)) {
            await renderFrame();
        }
    };
    await renderFrame();

    gif.on("finished", (blob) => {
        downloadBlob(blob, "gif")
        if (callbackFunction) callbackFunction()
    });

    gif.render();
}