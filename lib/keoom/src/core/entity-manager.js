import Entity from "./entity.js"

export default class EntityManager {
    update() {}

    add(tag="default") {
        return new Entity(tag)
    }
}