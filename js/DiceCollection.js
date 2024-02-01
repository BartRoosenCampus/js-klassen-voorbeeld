"use strict";

import {Dice} from "./Dice.js";

export class DiceCollection {
    diceCollection = [];

    constructor(page) {
        this.page = page;
        for (let i = 0; i < 5; i++) {
            this.diceCollection.push(new Dice());
        }

        this.updatePage();
    }

    rollDices () {
        for (const dice of this.diceCollection) {
            if (!dice.locked) dice.roll();
        }
        this.updatePage();
    }

    updatePage() {
        this.page.diceArea.innerHTML = '';
        for (const dice of this.diceCollection) {
            const div = document.createElement('div');
            div.classList.add('large');

            if (dice.locked) div.classList.add('locked');

            div.innerText = dice.value;
            div.addEventListener('click', () => {
                dice.toggleLock();
                if (dice.locked) {
                    div.classList.add('locked');
                } else {
                    div.classList.remove('locked');
                }
            });
            this.page.diceArea.append(div);
        }
    }
}