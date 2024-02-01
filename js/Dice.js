"use strict";

export class Dice {
    constructor() {
        this.value = 1;
        this.locked = false;
    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }

    toggleLock() {
        this.locked = !this.locked;
    }
}