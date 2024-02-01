"use strict";

import {DiceCollection} from "./DiceCollection.js";

const page = {
    diceArea: document.getElementById('diceArea'),
    rollAllDices: document.getElementById('rollAllDices'),
}

const diceCollection = new DiceCollection(page);

page.rollAllDices.addEventListener('click', () => {
    diceCollection.rollDices();
});


