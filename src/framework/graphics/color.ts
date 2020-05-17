export class Color {
    a: number

    r: number

    g: number

    b: number
    
    constructor(r: number, g: number, b: number, a = 255) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }

    static black = new Color(0, 0, 0)
    static blue = new Color(0, 0, 255)
    static cornflowerBlue = new Color(100, 149, 237)
    static green = new Color(0, 255, 0)
    static red = new Color(255, 0, 0)
    static white = new Color(255, 255, 255)
    static yellow = new Color(255, 255, 0)
}