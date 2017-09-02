import Box from './Box'
import Vase from './Vase'
import Paper from './Paper'
import Soil from './Soil'
import Seed from './Seed'
import Glasses from './Glasses'

class Game {
    constructor () {
        this.box = new Box('.game .box');
        this.vase = new Vase('.game .vase', this);
        this.paper = new Paper('.game .paper', this);
        this.soil = new Soil('.game .soil');
        this.seed = new Seed('.game .seed');
        this.glasses = new Glasses('.game .glasses');
    }
    unBox () {
        $('.intro').classList.add('hide');
        this.box.open().then(() => {
            after(500, () => {
                after(200, () => this.seed.comeOut());
                after(1000, () => this.soil.comeOut());
                after(2000, () => this.vase.comeOut());
                after(2100, () => this.paper.comeOut());
                after(2500, () => this.glasses.comeOut());
                after(7000, () => this.paper.next());
            })
        });
    }
}

export default Game