import { GraphicsDevice } from './graphicsDevice'
import { Texture2D } from './texture2D'
import { Rectangle, Vector2 } from '../'
import { Color } from './color'

export class SpriteBatch {
    graphicsDevice: GraphicsDevice

    constructor(graphicsDevice: GraphicsDevice) {
        this.graphicsDevice = graphicsDevice
    }

    begin() {

    }

    draw(texture: Texture2D, params: any) {
        const context = this.graphicsDevice.canvas.getContext("2d")
        if (context) {
            if (params instanceof Vector2) {
                context.drawImage(texture.image, params.x, params.y)
            }
            else if (params instanceof Rectangle) {
                context.drawImage(texture.image, params.x, params.y, params.width, params.height)
            }
        }
    }

    end() {

    }
}