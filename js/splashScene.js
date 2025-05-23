/* global Phaser */
class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" })
  }

  init(data) {
  this.cameras.main.setBackgroundColor("d43535")
  }
    
  preload() {
    console.log("Splash Scene")
  }

  create(data) {
 }

  update(time, delta) {
    this.scene.switch("titleScene")
  }
}
  export default SplashScene

