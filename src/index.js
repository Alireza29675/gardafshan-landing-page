import ImageLoader from './ImageLoader'
import Box from './Box'
import Vase from './Vase'

window.$ = (query) => document.querySelector(query);
window.$$ = (query) => document.querySelectorAll(query);

window.after = (time, doWhat) => setTimeout(doWhat, time);
window.every = (time, doWhat) => setInterval(doWhat, time);

class Game {
    constructor () {
        this.imagesLoader = new ImageLoader('./assets/images', this.ready.bind(this));
        this.box = new Box('.game .box');
        this.vase = new Vase('.game .vase')
    }
    ready () {
        after(1000, this.unbox.bind(this))
    }
    unbox () {
        this.box.open();
        this.vase.comeOut();
    }
}

window.game = new Game();