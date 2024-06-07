import { Canvg } from "canvg";
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
        workers: 2,
        quality: 10,
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
            // @ts-ignore
            if (millisecond >= a.maxDuration || a.duration + millisecondsPerFrame >= a.maxDuration) {
                if (!allAnimationsDone[i]) {
                    allAnimationsDone[i] = true;
                    // @ts-ignore
                    a.duration = a.maxDuration;
                }
            } else {
                allAnimationsDone[i] = false;
                a.update(millisecondsPerFrame);
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

    await canvgInstance.render();

    gif.on("finished", (blob) => {
        downloadBlob(blob, "gif")
        if (callbackFunction) callbackFunction()
    });

    gif.render();
}