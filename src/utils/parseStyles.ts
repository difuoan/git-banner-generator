import { kebabToCamelCase } from "./kebabToCamelCase";

// Function to parse CSS string to JavaScript style object
export const parseStyles = (styleString: string) => {
    return styleString.split(';').reduce((styleObject, styleProperty) => {
        let [property, value] = styleProperty.split(':');
        if (property && value) {
            property = kebabToCamelCase(property.trim());
            // @ts-ignore
            styleObject[property] = value.trim();
        }
        return styleObject;
    }, {});
};