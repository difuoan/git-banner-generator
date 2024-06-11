export const getImageDimensions = (base: string): Promise<{ x: number, y: number }> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            const width = img.width;
            const height = img.height;
            img.remove();
            resolve({ x: width, y: height });
        };
        img.onerror = function (error) {
            reject(error);
        };
        img.src = base;
    });
}