export enum ButtonState {
    pressed,
    released
}

let x: number
let y: number
let leftButton: ButtonState
let middleButton: ButtonState
let rightButton: ButtonState

window.addEventListener("mousedown", (e) => {
    x = e.x
    y = e.y
    if (e.which == 1) {
        leftButton = ButtonState.pressed
    }
    if (e.which == 2) {
        middleButton = ButtonState.pressed
    }
    if (e.which == 3) {
        rightButton = ButtonState.pressed
    }
}, false)

window.addEventListener("mousemove", (e) => {
    x = e.x
    y = e.y
}, false)

window.addEventListener("mouseup", (e) => {
    if (e.which == 1) {
        leftButton = ButtonState.released
    }
    if (e.which == 2) {
        middleButton = ButtonState.released
    }
    if (e.which == 3) {
        rightButton = ButtonState.released
    }
}, false)

class MouseState {
    x: number

    y: number

    leftButton: ButtonState = ButtonState.released

    middleButton: ButtonState = ButtonState.released
    
    rightButton: ButtonState = ButtonState.released

    constructor() {
        this.x = 0
        this.y = 0
    }
}

export class Mouse {
    private constructor() { }

    static getState() {
        const mouseState = new MouseState()
        mouseState.x = x
        mouseState.y = y
        mouseState.leftButton = leftButton
        mouseState.middleButton = middleButton
        mouseState.rightButton = rightButton
        return mouseState
    }
}