import { Color } from './color'
import { Game } from '../index/game'

document.body.style.margin = '0px'

export class GraphicsDevice {
    canvas: HTMLCanvasElement

    private game: Game

    constructor(game: Game) {
        this.game = game
        this.canvas = document.createElement("canvas")
        this.canvas.width = 640
        this.canvas.height = 480
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