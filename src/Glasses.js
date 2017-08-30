import DragHandler from './DragHandler'

class Glasses {
    constructor (query) {
        this.container = $(query);
        this.draggable = new DragHandler(this.container, {x: 0, y: 80});
        window.addEventListener('resize', () => {
            this.container.style.top = '';
            this.container.style.left = '';
        })
    }
}

export default Glasses