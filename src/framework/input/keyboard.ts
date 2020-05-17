enum KeyState {
    down,
    up
}

export enum Keys {
    w = 87,
    a = 65,
    s = 83,
    d = 68
}

const keysDown: Array<Keys> = [ ]

class KeyboardState {
    isKeyDown(key: Keys) {
        return keysDown.indexOf(key) != -1
    }

    isKeyUp(key: Keys) {
        return keysDown.indexOf(key) == -1
    }
}

window.addEventListener("keydown", (e) => {
    if (keysDown.indexOf(e.keyCode) == -1) {
        keysDown.push(e.keyCode)
    }
}, false)

window.addEventListener("keyup", (e) => {
    keysDown.splice(keysDown.indexOf(e.keyCode), 1)
}, false)

export class Keyboard {
    private constructor() {

    }
    
    static getState() {
        const keyboardState = new KeyboardState()
        return keyboardState
    }
}