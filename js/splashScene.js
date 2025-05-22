/* global Phaser */
class SplashScene extends Phaser.Scene {
    constructor() {
        super({ key: "splashScene" })
    }

    init(data) {
      this.cameras.main.setBackgroundColor("1edc5a")
        }
    
    preload() {
      console.log("Splash Scene")
    }

        create(data) {
        }

        update(time, delta) {
        }
    }
    export default SplashScene

