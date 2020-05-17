import { Game, GameTime, Vector2, Rectangle } from './framework'
import { Keyboard, Keys, Mouse, ButtonState } from './framework/input'
import { Color, GraphicsDevice, SpriteBatch, Texture2D } from './framework/graphics'

const spriteSpeed = 10

export class Game1 extends Game {
    spriteBatch?: SpriteBatch

    spriteRectangle: Rectangle

    texture2D: Texture2D = new Texture2D()

    constructor() {
        super()
        this.graphics = new GraphicsDevice(this)
        this.spriteBatch = new SpriteBatch(this.graphics)
        this.spriteRectangle = new Rectangle(0, 0, 0, 0)
    }

    loadContent() {
        this.texture2D = this.content.load("plane.png")
    }
    
    update(gameTime: GameTime) {
        this.spriteRectangle.width = this.texture2D.width * .4
        this.spriteRectangle.height = this.texture2D.height * .4
        const mouseState = Mouse.getState()
        const keyboardState = Keyboard.getState()
        if (keyboardState.isKeyDown(Keys.w)) {
            this.spriteRectangle.y -= spriteSpeed
        }
        if (keyboardState.isKeyDown(Keys.a)) {
            this.spriteRectangle.x -= spriteSpeed
        }
        if (keyboardState.isKeyDown(Keys.s)) {
            this.spriteRectangle.y += spriteSpeed
        }
        if (keyboardState.isKeyDown(Keys.d)) {
            this.spriteRectangle.x += spriteSpeed
        }
        if (mouseState.leftButton == ButtonState.pressed && this.spriteRectangle.contains(new Vector2(mouseState.x, mouseState.y))) {
            console.log('click')
        }
    }

    draw(gameTime: GameTime) {
        this.graphics?.clear(Color.cornflowerBlue)

        if (this.spriteBatch) {
            this.spriteBatch.begin()
            this.spriteBatch.draw(this.texture2D, this.spriteRectangle)
            this.spriteBatch.end()
        }
    }
}