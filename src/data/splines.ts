export type Spline = "linear" | "ease-in" | "ease-out" | "ease-in-out";

export const splines: { [K in Spline]: string } = {
    "ease-in": "0.42 0 1 1",
    "ease-in-out": "0.42 0 0.58 1",
    "ease-out": "0 0 0.58 1",
    linear: "0 0 1 1",
};

export const isSpline = (element: any): element is Spline => {
    if (
        ![
            typeof element === "string",
            ["linear", "ease-in", "ease-out", "ease-in-out"].includes(element),
        ].every((val) => val === true)
    )
        return false;
    return true;
};
