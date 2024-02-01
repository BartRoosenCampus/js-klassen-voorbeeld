"use strict";

class Vervoersmiddel {
    aantalPlaatsen;

    setAantalPlaatsen(aantal) {
        this.aantalPlaatsen = aantal;
    }
}

class Auto extends Vervoersmiddel {
    constructor() {
        super();
    }
}

const auto = new Auto();

auto.setAantalPlaatsen(5);