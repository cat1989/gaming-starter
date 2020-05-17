import { GameTime } from './gameTime'
import { GraphicsDevice } from '../graphics'
import { ContentManager } from '../content'

export class Game {
    isMouseVisible: boolean

    graphics?: GraphicsDevice

    content: ContentManager

    protected loadContent() { }

    protected update(gameTime: GameTime) { }

    protected draw(gameTime: GameTime) { }

    run() {
        const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
        const beginGameTime = new Date().getTime()
        let elapsedGameTime = new Date().getTime()
        const onTick = () => {
            const now = new Date().getTime()
            const gameTime = new GameTime()
            gameTime.elapsedGameTime = now - elapsedGameTime
            gameTime.totalGameTime = now - beginGameTime
            elapsedGameTime = now
            this.update(gameTime)
            this.draw(gameTime)
            requestAnimationFrame(onTick)
        }
        this.loadContent()
        if (this.content.assets.length == 0) {
            onTick()
        }
        else {
            const promises: any = [ ];
            this.content.assets.map(asset => {
                promises.push(new Promise((resolve, reject) => {
                    asset.image.onload = () => {
                        asset.width = asset.image.width
                        asset.height = asset.image.height
                        resolve()
                    }
                    asset.image.src = '/' + this.content.rootDirectory + asset.name
                }))
            })
            Promise.all(promises).then(res => {
                onTick()
            })
        }
    }

    constructor() {
        this.isMouseVisible = true
        this.content = new ContentManager()
    }
}