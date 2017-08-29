import DragHandler from './DragHandler'

class Glasses {
    constructor (query) {
        this.container = $(query);
        this.draggable = new DragHandler(this.container, {x: 0, y: 80});
        this.draggable.onStart(e => {
            this.tilt()
        });
        this.draggable.onMove(e => {
            console.log(e.inTarget)
        });
        this.draggable.onEnd(e => {
            this.untilt()
        });
    }
    tilt () {
        this.container.classList.add('tilt')
    }
    untilt () {
        this.container.classList.remove('tilt')
    }
}

export default Glasses