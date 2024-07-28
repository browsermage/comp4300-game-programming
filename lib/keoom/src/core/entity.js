/**
 * @import Collision from "@keoom/components/collision.js"
 * @import Input from "@keoom/components/input.js"
 * @import Lifespan from "@keoom/components/lifespan.js"
 * @import Score from "@keoom/components/score.js"
 * @import Shape from "@keoom/components/shape.js"
 * @import Transform from "@keoom/components/transform.js"
 */

export default class Entity {

    id
    tag
    #alive = true

    /** @type {Transform|null} */
    transform = null
    /** @type {Collision|null} */
    collision = null
    /** @type {Lifespan|null} */
    lifespan = null
    /** @type {Shape|null} */
    shape = null
    /** @type {Input|null} */
    input = null
    /** @type {Score|null} */
    score = null

    constructor(tag = "", id =  0) {
        this.tag = tag
        this.id = id
    }
   
    isActive() {
        return this.#alive
    }

    destroy() {
        // Todo: Implement
    }
}
