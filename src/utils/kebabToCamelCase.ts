export const kebabToCamelCase = (str: string) => {
    return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
};