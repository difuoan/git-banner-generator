import { AnimateElement, Canvg } from "canvg";
import GIF from "gif.js";
import { RefObject } from "react";
import { downloadBlob } from "./downloadBlob";

export const convertSVGToGIF = async (svgContainer: RefObject<HTMLDivElement>, svgWidth: number, svgHeight: number, svgBackground: string, callbackFunction?: Function) => {
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
        repeat: 1,
    });

    const canvgInstance = await Canvg.from(context, svgText, {
        ignoreAnimation: true,
        ignoreMouse: true,
    });

    const allAnimationsDone: boolean[] = [];
    let millisecond: number = 0;

    const millisecondsPerFrame = 60;
    const renderFrame = async function () {
        canvgInstance.screen.animations.forEach((a, i) => {
            const anim = a as AnimateElement & { duration: number, maxDuration: number }
            if (anim.duration + millisecondsPerFrame >= anim.maxDuration) {
                if (!allAnimationsDone[i]) {
                    allAnimationsDone[i] = true;
                    anim.update(anim.maxDuration - anim.duration);
                }
            } else
                if (millisecond >= anim.maxDuration) {
                    if (!allAnimationsDone[i]) {
                        allAnimationsDone[i] = true;
                        anim.duration = anim.maxDuration;
                    }
                } else {
                    allAnimationsDone[i] = false;
                    anim.update(millisecondsPerFrame);
                }
        });
        await canvgInstance.render();
        gif.addFrame(context, {
            copy: true,
            delay: (1 / millisecondsPerFrame) * 1000,
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