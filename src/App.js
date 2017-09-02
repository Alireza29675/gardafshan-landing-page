import Game from './Game'

class App {
    constructor () {
        this.game = new Game();
        window.onload = this.ready.bind(this)
    }
    ready () {
        // this.game.unBox()
    }
}

window.app = new App;