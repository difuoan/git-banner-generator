export type ElementType = "circle" | "text" | "img" | "rectangle" | "pattern";

export type AnimatableAttributeValue = { value: string; text: string }

export type AnimatableAttributes = Record<
    ElementType,
    AnimatableAttributeValue[]
>;

export const animatableAttributes: AnimatableAttributes = {
    circle: [
        { value: "cx", text: "X" },
        { value: "cy", text: "Y" },
        { value: "r", text: "Radius" },
        { value: "skewX", text: "Skew X" },
        { value: "skewY", text: "Skew Y" },
        { value: "rotate", text: "Rotate" },
    ],
    text: [
        { value: "x", text: "X" },
        { value: "y", text: "Y" },
        { value: "dx", text: "Line Offset X" },
        { value: "dy", text: "Line Offset Y" },
        { value: "font-size", text: "Font Size" },
        { value: "skewX", text: "Skew X" },
        { value: "skewY", text: "Skew Y" },
        { value: "rotate", text: "Rotate" },
    ],
    img: [
        { value: "width", text: "Width" },
        { value: "height", text: "Height" },
        { value: "x", text: "X" },
        { value: "y", text: "Y" },
        { value: "skewX", text: "Skew X" },
        { value: "skewY", text: "Skew Y" },
        { value: "rotate", text: "Rotate" },
    ],
    rectangle: [
        { value: "width", text: "Width" },
        { value: "height", text: "Height" },
        { value: "x", text: "X" },
        { value: "y", text: "Y" },
        { value: "rx", text: "Radius X" },
        { value: "ry", text: "Radius Y" },
        { value: "skewX", text: "Skew X" },
        { value: "skewY", text: "Skew Y" },
        { value: "rotate", text: "Rotate" },
    ],
    pattern: [
        { value: "width", text: "Width" },
        { value: "height", text: "Height" },
        { value: "x", text: "X" },
        { value: "y", text: "Y" },
        { value: "rx", text: "Radius X" },
        { value: "ry", text: "Radius Y" },
        { value: "skewX", text: "Skew X" },
        { value: "skewY", text: "Skew Y" },
        { value: "rotate", text: "Rotate" },
    ],
};
