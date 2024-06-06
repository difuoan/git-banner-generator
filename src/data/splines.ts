export type Spline = "linear" | "ease-in" | "ease-out" | "ease-in-out"

export const splines: { [K in Spline]: string } = {
    "ease-in": "0.42 0 1 1",
    "ease-in-out": "0.42 0 0.58 1",
    "ease-out": "0 0 0.58 1",
    linear: "0 0 1 1"
}