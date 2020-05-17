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

    draw(
        texture: Texture2D,
        params: Vector2 | Rectangle,
        rotation: number,
        origin: Vector2,
        scale: Vector2 | number
    ) {
        const context = this.graphicsDevice.canvas.getContext("2d")
        if (context) {
            context.save()
            context.setTransform(1, 0, 0, 1, 0, 0)
            const width = origin.x
            const height = origin.y
            //context.translate(params.x + .5 * width, params.y + .5 * height)
            context.translate(params.x + width, params.y + height)
            if (scale instanceof Vector2) {
                context.scale(scale.x, scale.y)
            }
            else if (typeof scale == 'number') {
                context.scale(scale, scale)
            }
            context.rotate(rotation * Math.PI / 180)
            if (params instanceof Vector2) {
                //context.drawImage(texture.image, -.5 * width, -.5 * height)
                context.drawImage(texture.image, -width, -height)
            }
            else if (params instanceof Rectangle) {
                context.drawImage(texture.image, -.5 * width, -.5 * height, params.width, params.height)
            }
            context.restore()
        }
    }

    end() {

    }
}