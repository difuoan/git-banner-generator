export type AnimatableAttribute = "x" | "y";

export const isAnimatableAttribute = (
    element: any
): element is AnimatableAttribute => {
    if (
        ![typeof element === "string", ["x", "y"].includes(element)].every(
            (val) => val === true
        )
    )
        return false;
    return true;
};
