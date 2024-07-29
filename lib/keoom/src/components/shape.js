
/** export @typedef  {`#${string}`} ColorValueHex */

export default class Shape {

    radius
    points
    thickness
    fillColor
    outlineColor

    /**
     * @param {string} [fillColor]
     * @param {string} [outlineColor]
     * @param {number} [radius]
     * @param {number} [points]
     * @param {number} [thickness]
     */
    constructor(radius = 0, points = 0, thickness = 0, fillColor = "#F0F", outlineColor = "#0F0") {
        this.radius = radius
        this.points = points
        this.thickness = thickness
        this.fillColor = fillColor
        this.outlineColor = outlineColor   
    }
 }
