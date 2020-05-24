import { Vector2 } from './vector2'

export class Rectangle {
    x: number

    y: number

    width: number

    height: number

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    contains(point: Vector2) {
        return (
            point.x >= this.x &&
            point.x <= this.x + this.width &&
            point.y >= this.y &&
            point.y <= this.y + this.height
        )
    }

    center() {
        return new Vector2(
            this.x + this.width * .5,
            this.y + this.height * .5
        )
    }
}