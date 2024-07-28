import Vector2 from "@keoom/core/vector2.js"


export default class Transform {

    pos
    velocity
    angle

    constructor(pos = new Vector2(), velocity = new Vector2(), angle = 0) {

        this.pos = pos
        this.velocity = velocity
        this.angle = angle
    }

}
