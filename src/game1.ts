import { Game, GameTime, Vector2, Rectangle, MathHelper } from './framework'
import { Keyboard, Keys, Mouse, ButtonState } from './framework/input'
import { Color, SpriteBatch } from './framework/graphics'
import { Sprite } from './sprite'

export class Game1 extends Game {
    spriteBatch: SpriteBatch

    sprite: Sprite

    spriteSpeed = 6

    gravity = .1
    elasticity = .5
    friction = .2//.008

    easeValue = .05

    radian = MathHelper.toRadians(90)

    velocityx = 0
    velocityy = 0

    rotation = 0

    scale = 1

    constructor() {
        super()
        this.spriteBatch = new SpriteBatch(this.graphics)
        this.sprite = new Sprite()
    }

    initialize() {
        this.sprite.position.x = 0
        this.sprite.position.y = this.graphics.viewport.height - this.sprite.texture2D.height
        
        this.velocityx = Math.cos(this.radian) * this.spriteSpeed
        this.velocityy = Math.sin(this.radian) * this.spriteSpeed
    }

    loadContent() {
        this.sprite.texture2D = this.content.load("man.png")
    }
    
    update(gameTime: GameTime) {
        const elapsedGameTime = gameTime.elapsedGameTime / 100
        const mouseState = Mouse.getState()
        const keyboardState = Keyboard.getState()

        this.velocityx -= this.velocityx * this.friction
        if (this.sprite.position.y + this.sprite.texture2D.height <= this.graphics.viewport.height) {
            // this.velocityy = -(this.velocityy) * this.elasticity
            this.velocityy += this.gravity
        }
        else {
            this.sprite.position.y = this.graphics.viewport.height - this.sprite.texture2D.height
            this.velocityy = 0
        }
        if (this.sprite.position.x < 0) {
            this.sprite.position.x = 0
            this.velocityx = 0
        }
        else if (this.sprite.position.x > this.graphics.viewport.width - this.sprite.texture2D.width) {
            this.sprite.position.x = this.graphics.viewport.width - this.sprite.texture2D.width
            this.velocityx = 0
        }

        this.sprite.position.x += this.velocityx
        this.sprite.position.y += this.velocityy

        // if (keyboardState.isKeyDown(Keys.w)) {
        //     this.sprite.position.y -= this.spriteSpeed * elapsedGameTime * 10
        // }
        if (keyboardState.isKeyDown(Keys.a)) {
            this.velocityx -= 2
            //this.sprite.position.x -= this.spriteSpeed * elapsedGameTime * 5
        }
        // if (keyboardState.isKeyDown(Keys.s)) {
        //     this.sprite.position.y += this.spriteSpeed * elapsedGameTime * 10
        // }
        if (keyboardState.isKeyDown(Keys.d)) {
            this.velocityx += 2
            //this.sprite.position.x += this.spriteSpeed * elapsedGameTime * 5
        }
        // if (keyboardState.isKeyDown(Keys.left)) {
        //     this.rotation -= this.spriteSpeed * elapsedGameTime * 2
        // }
        // if (keyboardState.isKeyDown(Keys.right)) {
        //     this.rotation += this.spriteSpeed * elapsedGameTime * 2
        // }
        if (keyboardState.isKeyDown(Keys.space)) {
            if (this.sprite.position.y >= this.graphics.viewport.height - this.sprite.texture2D.height) {
                this.velocityy -= this.spriteSpeed
            }
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
        // const radian = MathHelper.toRadians(gameTime.totalGameTime)
        // this.scale = (.02 * Math.sin(radian / 10) + .99) * .75
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