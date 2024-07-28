/**
 * A base class representing an entity in the system.
 */
export default class Entity {
    /** @type {number} */
    #id

    /** @type {string} */
    #tag

    #alive = true

    transform
    shape
    collision
    input
    score
    lifespan

    /**
     * Creates an Entity instance.
     *
     * @param {string} [tag="default"] - Tags help you identify entities for scripting purposes.
     * @param {number} [id=0] - The entity's unique identifier.
     */
    constructor(tag = 'default', id = 0) {
        this.#tag = tag
        this.#id = id
    }

    /**
     * Retrieves the entity's unique identifier.
     *
     * @returns {number} The entity's ID.
     */
    id() {
        return this.#id
    }

    /**
     * Checks if the entity is alive (active).
     *
     * @returns {boolean} True if the entity is alive, false otherwise.
     */
    isActive() {
        return this.#alive
    }

    /**
     * Retrieves the entity's tag.
     *
     * @returns {string} The entity's tag.
     */
    tag() {
        return this.#tag
    }

    /**
     * Destroys the entity on the end of the frame
     * @returns void
     */
    destroy() {
        // Todo: Implement
    }
}
