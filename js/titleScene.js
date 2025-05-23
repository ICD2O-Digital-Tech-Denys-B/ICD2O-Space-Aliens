/* global */
class TitleScene extends Phaser.Scene {
    constructor() {
    super({key:"titleScene"})
    }

    init(data) {
        this.camera.main.setBackgroundColor("1edc5a")
    }

    preload() {
        console.log("Title Scene")
    }

    create(data) {

    } 
    update(time, delta) {
        
    }
}
export default TitleScene