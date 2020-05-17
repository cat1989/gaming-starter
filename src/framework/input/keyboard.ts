enum KeyState {
    down,
    up
}

export enum Keys {
    a = 65,
    b = 66,
    c = 67,
    d = 68,
    e = 69,
    f = 70,
    g = 71,
    h = 72,
    i = 73,
    j = 74,
    k = 75,
    l = 76,
    m = 77,
    n = 78,
    o = 79,
    p = 80,
    q = 81,
    r = 82,
    s = 83,
    t = 84,
    u = 85,
    v = 86,
    w = 87,
    x = 88,
    y = 89,
    z = 90,
    escape = 27,
    space = 32,
    enter = 13,
    back = 8,
    delete = 46,
    up = 38,
    left = 37,
    right = 39,
    down = 40,
    capsLock = 20,
    leftShift = 16,
    leftControl = 17,
    leftAlt = 18,
    numPad0 = 48,
    numPad1 = 49,
    numPad2 = 50,
    numPad3 = 51,
    numPad4 = 52,
    numPad5 = 53,
    numPad6 = 54,
    numPad7 = 55,
    numPad8 = 56,
    numPad9 = 57
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
    private constructor() { }
    
    static getState() {
        const keyboardState = new KeyboardState()
        return keyboardState
    }
}