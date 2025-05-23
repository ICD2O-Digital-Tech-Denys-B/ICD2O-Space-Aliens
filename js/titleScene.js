/* global phaser */
// Created by: Shem
// Created on: May 2025
// This is the title Scene for the game

/**
 * This class is the title Scene for the game
 */
class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'titleScene' });
        this.aliens_screen_image = null
    }


    init (data) {
    this.cameras.main.setBackgroundColor("eb3a15");
    }

    preload() {
        console.log('Title Scene');
        this.load.image('titleSceneBackground', './assets/aliens_screen_image.jpg')
    }
    create(data) {
        this.titleSceneBackground = this.add.sprite(0, 0, 'titleSceneBackground').setScale(3.75)
        this.titleSceneBackground.x = 1920 / 2
        this.titleSceneBackground.y = 1080 / 2
    }

    update (time, delta) { 
    }
}
    export default TitleScene