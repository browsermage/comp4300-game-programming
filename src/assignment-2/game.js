import Vector2 from "../core/vector2/vector2.js"

function main() {
    const vec1 = new Vector2(100, 100)
    const vec2 = new Vector2(200, 200)

    vec1.add(vec2)

    console.log(vec1)
}

main()