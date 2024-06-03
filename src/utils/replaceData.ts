export const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export const replaceAll = (str: string, find: string, replace: any) => {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

export const replaceData = (data: string, elementIndex: number, svgHeight: number, svgWidth: number) => {
    let newData = replaceAll(data, "<svg-width>", svgWidth)
    newData = replaceAll(newData, "<svg-height>", svgHeight)
    newData = replaceAll(newData, "<element-index>", elementIndex)
    return newData
}