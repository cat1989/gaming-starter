import { Game, GameTime, Vector2, Rectangle } from './framework'
import { Keyboard, Keys, Mouse, ButtonState } from './framework/input'
import { Color, SpriteBatch, Texture2D } from './framework/graphics'

export class Game1 extends Game {
    spriteBatch: SpriteBatch

    spritePosition = Vector2.Zero

    spriteSpeed = 10

    texture2D: Texture2D = new Texture2D()

    constructor() {
        super()
        this.spriteBatch = new SpriteBatch(this.graphics)
    }

    initialize() {
        this.spritePosition.x = (this.graphics.viewport.width - this.texture2D.width) * .5
        this.spritePosition.y = (this.graphics.viewport.height - this.texture2D.height) * .5
    }

    loadContent() {
        this.texture2D = this.content.load("plane.png")
    }
    
    update(gameTime: GameTime) {
        const mouseState = Mouse.getState()
        const keyboardState = Keyboard.getState()
        if (keyboardState.isKeyDown(Keys.w)) {
            this.spritePosition.y -= this.spriteSpeed
        }
        if (keyboardState.isKeyDown(Keys.a)) {
            this.spritePosition.x -= this.spriteSpeed
        }
        if (keyboardState.isKeyDown(Keys.s)) {
            this.spritePosition.y += this.spriteSpeed
        }
        if (keyboardState.isKeyDown(Keys.d)) {
            this.spritePosition.x += this.spriteSpeed
        }
        if (keyboardState.isKeyDown(Keys.space)) {
            this.spritePosition.x = (this.graphics.viewport.width - this.texture2D.width) * .5
            this.spritePosition.y = (this.graphics.viewport.height - this.texture2D.height) * .5
        }
        if (mouseState.leftButton == ButtonState.pressed &&
            new Rectangle(
                this.spritePosition.x,
                this.spritePosition.y,
                this.texture2D.width,
                this.texture2D.height
            ).contains(
                new Vector2(mouseState.x, mouseState.y)
            )) {
            console.log('click')
        }
        super.update(gameTime)
    }

    draw(gameTime: GameTime) {
        this.graphics.clear(Color.cornflowerBlue)

        this.spriteBatch.begin()
        this.spriteBatch.draw(this.texture2D, this.spritePosition)
        this.spriteBatch.end()

        super.draw(gameTime)
    }
}