export default class Entity {
    #id
    #tag
    #alive = true

    constructor(tag = "default", id = 0) {
        this.#tag = tag
        this.#id = id
    }
}