import config from "../../lessons/1/config.json" with { type: "json" }

import Shape from "@keoom/components/shape.js"
import Vector2 from "@keoom/core/vector2.js"

const v1 = new Vector2(2,3)
const v2 = new Vector2(2,4)
const shape = new Shape(2,3,4)

v1.add(v2).subtract(v2).scale(v2)

console.log(config)