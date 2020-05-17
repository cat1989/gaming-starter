import { Color } from './color'
import { Game } from '../index/game'
import { Viewport } from './viewport'

document.body.style.margin = '0px'
document.body.style.padding = '0px'
document.body.style.overflow = 'hidden'

export class GraphicsDevice {
    canvas: HTMLCanvasElement

    private game: Game

    viewport: Viewport

    constructor(game: Game) {
        this.game = game
        this.canvas = document.createElement("canvas")
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.viewport = {
            x: 0,
            y: 0,
            width: this.canvas.width,
            height: this.canvas.height
        }
        window.addEventListener("resize", () => {
            this.canvas.width = window.innerWidth
            this.canvas.height = window.innerHeight
            this.viewport = {
                x: 0,
                y: 0,
                width: this.canvas.width,
                height: this.canvas.height
            }
        }, false)
        document.body.appendChild(this.canvas)
        this.canvas.addEventListener("contextmenu", (e) => {
            e.preventDefault()
         }, false)
    }

    clear(color: Color) {
        const context = this.canvas.getContext("2d")
        if (context) {
            context.fillStyle = `rgba(${color.r},${color.g},${color.b},${color.a/255})`
            context.fillRect(0, 0, this.canvas.width, this.canvas.height)
        }
    }
}