/**
 * @import Entity from "./entity.js"
 * @import Vector2 from "./vector2.js"
*/

import EntityManager from "./entity-manager.js"


export default class Game {
    // window

    /** @type {EntityManager} */
    entities = new EntityManager()
    // font
    // text
    // playerConfig
    // enemyConfig
    // bulletConfig
    score = 0
    currentFrame = 0
    lastEnemySpawnTime = 0
    paused = false
    running = true

    // /** //@type {Entity} */
    // player

    /** @param {string} configPath */
    constructor(configPath) {
        this.init(configPath)
    }

    update() {}
    
    /** @param {string} configPath */
    init(configPath) {
        //todo READ json file
    }

    /** @param {boolean} paused */
    setPaused(paused) {}

    // Systems
    sMovement() {}
    sUserInput() {}
    sLifeSpan() {}
    sRender() {}
    sEnemySpawner() {}
    sCollision() {}
    
    spawnPlayer() {}
    spawnEnemy() {}

    /** @param {Entity} entity */
    spawnSmallEnemies(entity) {}

    /**
     * @param {Entity} entity
     * @param {Vector2} mousePos
     */
    spawnBullet(entity, mousePos) {}

    /** @param {Entity} entity */
    spawnSpecialWeapon(entity) {}

}