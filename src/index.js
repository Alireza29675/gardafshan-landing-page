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
        new ImageLoader('./assets/images', this.ready.bind(this));
        this.box = new Box('.game .box');
        this.vase = new Vase('.game .vase', this);
        this.paper = new Paper('.game .paper', this);
        this.soil = new Soil('.game .soil');
        this.seed = new Seed('.game .seed');
        this.glasses = new Glasses('.game .glasses')
    }
    ready () {
        after(1000, this.unbox.bind(this))
    }
    unbox () {
        this.box.open();
        after(200, () => {
            this.vase.comeOut();
            after(100, () => {this.paper.comeOut();});
            after(3000, () => {this.paper.next();})
        })
    }
}

window.game = new Game();