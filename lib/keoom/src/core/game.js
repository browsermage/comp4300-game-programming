/**
 * @import Entity from "./entity.js"
 * 
 * 
 * @typedef {{
    "window": {
        "width": number,
        "height": number,
        "frameLimit": number,
        "fullScreen": boolean
    },
    "font": {
        "font": string,
        "fontSize": string,
        "fontColor": string
    },
    "player": {
        "sphereRadius": number,
        "collisionRadius":number,
        "speed": number,
        "fillColor": string,
        "outlineColor": string,
        "outlineThickness": number,
        "shapeVertices": number
    },
    "enemy": {
        "shapeRadius": number,
        "collisionRadius": number,
        "minSpeed": number,
        "maxSpeed": number,
        "minVertices": number,
        "maxVertices": number,
        "outlineColor": string,
        "outlineThickness": string,
        "lifespan": number,
        "spawnInterval": number
    },
    "bullet": {
        "sphereRadius": number,
        "collisionRadius": number,
        "speed": number,
        "fillColor": string,
        "outlineColor": string,
        "outlineThickness": number,
        "shapeVertices": number,
        "lifespan": number
    }
}} ConfigJSON
*/

import Transform from "@keoom/components/transform.js"
import EntityManager from "./entity-manager.js"
import Vector2 from "./vector2.js"
import { time } from "./time.js"
import Shape from "@keoom/components/shape.js"
import Input from "@keoom/components/input.js"


export default class Game {
    // window

    /** @type {EntityManager} */
    entities = new EntityManager()
    // font
    // text
    playerConfig
    enemyConfig
    bulletConfig
    score = 0
    currentFrame = 0
    lastEnemySpawnTime = 0
    paused = false
    running = true

    /** @type {Entity | undefined} */
    player

    /** @param {ConfigJSON} config */
    constructor(config) {
        this.playerConfig = config.player
        this.enemyConfig = config.enemy
        this.bulletConfig = config.bullet
    }

    update() {}

    /** @param {ConfigJSON} config */
    init(config) {
        //todo set window from config
        // todo set fps
        // spawn player
    }

    run() {
        requestAnimationFrame(this.#frameRequestCallback)
    }

    #frameRequestCallback(unscaledTime = 0) {

        // compute time elapsed since last frame a.k.a delta time
        time.deltaTime = Number(((unscaledTime - time.lastTime) / 1000))

        // deltaTime value is capped to maximumDeltaTime
        time.deltaTime = Math.min(time.deltaTime, time.maximumDeltaTime)

        // update the last time with the current time
        time.lastTime = unscaledTime

        // deltaTime is added to elapsed time so far
        time.elapsedTime += time.deltaTime

        if (!this.paused) {
            this.entities.update()
            this.sEnemySpawner()
            this.sMovement()
            this.sCollision()
            this.sUserInput()
        }

        this.sRender()

        time.currentFrame++

        requestAnimationFrame(this.#frameRequestCallback)
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
    
    spawnPlayer() {
        const player = this.entities.add("player")
        player.transform = new Transform(new Vector2(200,200), new Vector2(1,1), 0)
        player.shape = new Shape(
            this.playerConfig.sphereRadius, 
            this.playerConfig.shapeVertices, 
            this.playerConfig.outlineThickness, 
            this.playerConfig.fillColor, 
            this.playerConfig.outlineColor
        )
        player.input = new Input()
        this.player = player
    }
    
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