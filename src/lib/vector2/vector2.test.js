import { test, expect } from '@playwright/test'
import Vector2 from "./vector2.js"

test('Test Vector2 class methods', async () => {
    // Create a vector with default values
    const defaultVector = new Vector2()
    expect(defaultVector.x).toBe(0)
    expect(defaultVector.y).toBe(0)

    // Create a vector with specific values
    const specificVector = new Vector2(3, 4)
    expect(specificVector.x).toBe(3)
    expect(specificVector.y).toBe(4)

    // Test the add method
    const vector1 = new Vector2(1, 2)
    const vector2 = new Vector2(3, 4)
    vector1.add(vector2)
    expect(vector1.x).toBe(4)
    expect(vector1.y).toBe(6)

    // Test the subtract method
    const vector3 = new Vector2(3, 4)
    const vector4 = new Vector2(1, 2)
    vector3.subtract(vector4)
    expect(vector3.x).toBe(2)
    expect(vector3.y).toBe(2)

    // Test the scale method
    const vector5 = new Vector2(2, 3)
    const vector6 = new Vector2(4, 5)
    vector5.scale(vector6)
    expect(vector5.x).toBe(8)
    expect(vector5.y).toBe(15)

    // Test the distance method
    const vector7 = new Vector2(2, 3)
    const vector8 = new Vector2(5, 1)
    const distance = vector7.distance(vector8)
    expect(distance).toBe(3.6) // about 3.6

    // 

    // Test the length method
    const vector9 = new Vector2(1, 2)
    const length = vector9.length()
    expect(length).toBe(5) // 5

    // Test the equal method
    const vector10 = new Vector2(3, 4)
    const vector11 = new Vector2(3, 4)
    const vector12 = new Vector2(1, 2)
    expect(vector10.equal(vector11)).toBe(true)
    expect(vector10.equal(vector12)).toBe(false)
})