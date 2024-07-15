/**
 * Class representing a 2-dimensional vector.
 * 
 * @class Vector2
 */
export default class Vector2 {
    x = 0
    y = 0

    /**
     * Creates an instance of Vector2.
     * 
     * @class Vector2
     * @param {number} [x=0] - The X coordinate of the vector. Defaults to 0 if not provided.
     * @param {number} [y=0] - The Y coordinate of the vector. Defaults to 0 if not provided.
     * 
     * @example
     * // Creating a vector with default values
     * let defaultVector = new Vector2()
     * console.log(defaultVector) // Vector2 { x: 0, y: 0 }
     * 
     * @example
     * // Creating a vector with specific values
     * let specificVector = new Vector2(3, 4)
     * console.log(specificVector) // Vector2 { x: 3, y: 4 }
     */
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }

    /**
     * Adds the components of the given vector to the current vector.
     * 
     * @param {Vector2} v An instance of Vector2. This represents the vector to be added to the current vector.
     * @returns {Vector2} The method returns the current vector (this).
     * 
     * @example
     * // Example usage:
     * const vector1 = new Vector2(1, 2)
     * const vector2 = new Vector2(3, 4)
     * vector1.add(vector2) // Now vector1 has components (4, 6)
     */
    add(v) {
        this.x += v.x
        this.y += v.y

        return this
    }

    /**
     * Subtracts the components of the given vector from the current vector.
     * 
     * @param {Vector2} v An instance of Vector2. This represents the vector to be subtracted from the current vector.
     * @returns {Vector2} The method returns the current vector (this).
     * 
     * @example
     * // Example usage:
     * const vector1 = new Vector2(3, 4)
     * const vector2 = new Vector2(1, 2)
     * vector1.subtract(vector2) // Now vector1 has components (2, 2)
     */
    subtract(v) {
        this.x -= v.x
        this.y -= v.y

        return this
    }

    /**
     * Scales the components of the current vector by the given vector.
     * 
     * @param {Vector2} v - The vector to scale the current vector by.
     * @returns {Vector2} The updated vector after scaling.
     * 
     * @example
     * // Example usage:
     * const vector1 = new Vector2(2, 3)
     * const vector2 = new Vector2(4, 5)
     * vector1.scale(vector2) // Now vector1 has components (8, 15)
     */
    scale(v) {
        this.x *= v.x
        this.y *= v.y

        return this
    }

    /**
     * Calculates the Euclidean distance between the current vector and the given vector.
     * 
     * @param {Vector2} v - The vector to calculate the distance to.
     * @returns {number} The distance between the two vectors.
     * 
     * @example
     * // Example usage:
     * const vector1 = new Vector2(1, 2)
     * const vector2 = new Vector2(4, 6)
     * const distance = vector1.distance(vector2) // distance is approximately 5
     */
    distance(v) {
       return Math.round(Math.sqrt(Math.pow(v.x - this.x, 2) + Math.pow(v.y - this.y, 2)) * 10) / 10
    }

    /**
     * Calculates the length of this vector.
     *
     * @example
     * // Example usage:
     * const vector1 = new Vector2(1, 2)
     * const length = vector1.length() // length is 2.2
     * @returns {number} The length of the vector.
     */
    length() {
        return Math.round(Math.sqrt(this.x ** 2 + this.y ** 2) * 10) / 10
    }

    /**
     * Checks if this vector is equal to another vector.
     * @param {Vector2} v - The vector to compare against.
     * @returns {boolean} True if the vectors are equal, false otherwise. 
     */
    equal(v) {
        return (this.x === v.x && this.y === v.y)
    }
}