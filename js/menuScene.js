/* global phaser */
// Created by: Shem
// Created on: May 2025
// This is the Menu Scene for the game

/**
 * This class is the Menu Scene for the game
 */
class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'menuScene' });
    }


    init (data) {
    this.cameras.main.setBackgroundColor("eb3a15");
    }

    preload() {
        console.log('Menu Scene');
    }

    create (data) {
    }

    update (time, delta) { 
    }
}
    export default MenuScene