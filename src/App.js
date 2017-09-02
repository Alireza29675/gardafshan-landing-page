import Game from './Game'

window.$ = (query) => document.querySelector(query);
window.$$ = (query) => document.querySelectorAll(query);

window.after = (time, doWhat) => setTimeout(doWhat, time);
window.every = (time, doWhat) => setInterval(doWhat, time);

class App {
    constructor () {
        this.game = new Game(this);
        this.enterButton = $('.intro button');
        this.init();
    }
    init () {
        window.onload = this.ready.bind(this);
        this.enterButton.addEventListener('click', () => this.game.unBox())
    }
    ready () {

    }
    whenGameIsDone () {

    }
}

window.app = new App;