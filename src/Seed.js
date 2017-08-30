import DragHandler from './DragHandler'

class Seed {
    constructor(query) {
        this.container = $(query)
        this.draggable = new DragHandler(this.container, {x: 50, y: 0});
        window.addEventListener('resize', () => {
            this.container.style.top = '';
            this.container.style.left = '';
        })
    }
}

export default Seed