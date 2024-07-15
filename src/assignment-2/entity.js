/**
 * A base class representing an entity in the system.
 */
export default class Entity {
    /** @type {number} */
    #id

    #tag

    #alive = true

    /**
     * Creates an Entity instance.
     *
     * @constructor
     * @param {string} [tag="default"] - The entity's tag.
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
        return this.tag
    }

    /**
     * Destroys the entity.
     * @returns void
     */
    destroy() {
        // Todo: Implement
    }
}
