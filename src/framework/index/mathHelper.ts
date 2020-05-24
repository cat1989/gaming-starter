export class MathHelper {
    private constructor() { }

    static pi = Math.PI

    static e = Math.E

    static twoPi = Math.PI * 2

    static max(value1: number, value2: number) {
        return Math.max(value1, value2)
    }

    static min(value1: number, value2: number) {
        return Math.min(value1, value2)
    }

    static clamp(value: number, min: number, max: number) {
        return Math.min(Math.max(value, min), max)
    }

    static toDegrees(radians: number) {
        return radians * 180 / Math.PI
    }

    static toRadians(degrees: number) {
        return degrees * Math.PI / 180
    }
}