
export default class Vector2 {
    
    x
    y

    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }

    /** @param {Vector2} v */
    add(v) {
        this.x += v.x
        this.y += v.y
    
        return this
    }

    /** @param {Vector2} v */
    subtract(v) {
        this.x -= v.x
        this.y -= v.y
    
        return this
    }

    /** @param {Vector2} v */
    scale(v) {
        this.x *= v.x
        this.y *= v.y
    
        return this
    }
    
    length() {
        return Math.round(Math.sqrt(this.x ** 2 + this.y ** 2) * 10) / 10
    }

    /** @param {Vector2} to */
    equal(to) {
        return (this.x === to.x && this.y === to.y)
    }

    /** @param {Vector2} to */
    distance(to) {
        return Math.round(Math.sqrt(Math.pow(to.x - this.x, 2) + Math.pow(to.y - this.y, 2)) * 10) / 10
    }
}