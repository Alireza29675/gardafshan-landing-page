import ImageLoader from './ImageLoader'
import Box from './Box'
import Vase from './Vase'
import Paper from './Paper'
import Soil from './Soil'
import Seed from './Seed'
import Glasses from './Glasses'

window.$ = (query) => document.querySelector(query);
window.$$ = (query) => document.querySelectorAll(query);

window.after = (time, doWhat) => setTimeout(doWhat, time);
window.every = (time, doWhat) => setInterval(doWhat, time);

class Game {
    constructor () {
        this.box = new Box('.game .box');
        this.vase = new Vase('.game .vase', this);
        this.paper = new Paper('.game .paper', this);
        this.soil = new Soil('.game .soil');
        this.seed = new Seed('.game .seed');
        this.glasses = new Glasses('.game .glasses');
        window.onload = this.ready.bind(this);
    }
    ready () {

    }
    unBox () {
        this.box.open();
        after(200, () => {
            after(200, () => this.seed.comeOut());
            after(1000, () => this.soil.comeOut());
            after(2000, () => this.vase.comeOut());
            after(2100, () => this.paper.comeOut());
            after(2500, () => this.glasses.comeOut());
            after(4500, () => this.paper.next());
        })
    }
}

window.game = new Game();