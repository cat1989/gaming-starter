import { Texture2D } from '../graphics'

export class ContentManager {
    rootDirectory: string

    assets: Array<Texture2D> = [ ]

    constructor() {
        this.rootDirectory = 'content/'
    }

    load(assetName: string) {
        const texture2D = new Texture2D()
        texture2D.name = assetName
        texture2D.image = new Image()
        this.assets.push(texture2D)
        return texture2D
    }
}