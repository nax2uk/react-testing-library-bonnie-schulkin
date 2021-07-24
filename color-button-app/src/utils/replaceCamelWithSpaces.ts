export const replaceCamelWithSpaces = (colorName:String):String => {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}