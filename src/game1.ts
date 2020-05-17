import { Game, GameTime, Vector2, Rectangle } from './framework'
import { Keyboard, Keys, Mouse, ButtonState } from './framework/input'
import { Color, SpriteBatch } from './framework/graphics'
import { Sprite } from './sprite'

export class Game1 extends Game {
    spriteBatch: SpriteBatch

    sprite: Sprite

    spriteSpeed = 10

    rotation = 0

    scale = 1

    constructor() {
        super()
        this.spriteBatch = new SpriteBatch(this.graphics)
        this.sprite = new Sprite()
    }

    initialize() {
        this.sprite.position.x = (this.graphics.viewport.width - this.sprite.texture2D.width) * .5
        this.sprite.position.y = (this.graphics.viewport.height - this.sprite.texture2D.height) * .5
    }

    loadContent() {
        this.sprite.texture2D = this.content.load("plane.png")
    }
    
    update(gameTime: GameTime) {
        const elapsedGameTime = gameTime.elapsedGameTime / 100
        const mouseState = Mouse.getState()
        const keyboardState = Keyboard.getState()
        if (keyboardState.isKeyDown(Keys.w)) {
            this.sprite.position.y -= this.spriteSpeed * elapsedGameTime * 10
        }
        if (keyboardState.isKeyDown(Keys.a)) {
            this.sprite.position.x -= this.spriteSpeed * elapsedGameTime * 5
        }
        if (keyboardState.isKeyDown(Keys.s)) {
            this.sprite.position.y += this.spriteSpeed * elapsedGameTime * 10
        }
        if (keyboardState.isKeyDown(Keys.d)) {
            this.sprite.position.x += this.spriteSpeed * elapsedGameTime * 5
        }
        if (keyboardState.isKeyDown(Keys.left)) {
            this.rotation -= this.spriteSpeed * elapsedGameTime * 2
        }
        if (keyboardState.isKeyDown(Keys.right)) {
            this.rotation += this.spriteSpeed * elapsedGameTime * 2
        }
        if (keyboardState.isKeyDown(Keys.space)) {
            this.sprite.position.x = (this.graphics.viewport.width - this.sprite.texture2D.width) * .5
            this.sprite.position.y = (this.graphics.viewport.height - this.sprite.texture2D.height) * .5
        }
        if (mouseState.leftButton == ButtonState.pressed &&
            new Rectangle(
                this.sprite.position.x,
                this.sprite.position.y,
                this.sprite.texture2D.width,
                this.sprite.texture2D.height
            ).contains(
                new Vector2(mouseState.x, mouseState.y)
            )) {
            console.log('click')
        }
        const degree = gameTime.totalGameTime * Math.PI / 180
        this.scale = (.02 * Math.sin(degree / 10) + .99) * .75
        super.update(gameTime)
    }

    draw(gameTime: GameTime) {
        this.graphics.clear(Color.cornflowerBlue)

        this.spriteBatch.begin()
        this.spriteBatch.draw(
            this.sprite.texture2D,
            this.sprite.position,
            this.rotation,
            new Vector2(this.sprite.texture2D.width * .5, this.sprite.texture2D.height * .5),
            this.scale
        )
        this.spriteBatch.end()

        super.draw(gameTime)
    }
}