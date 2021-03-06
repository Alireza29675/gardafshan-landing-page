import DragHandler from './DragHandler'

class Seed {
    constructor(query) {
        this.container = $(query);
        window.addEventListener('resize', () => {
            this.container.style.top = '';
            this.container.style.left = '';
        })
    }
    getOut () {
        this.draggable.destroy()
        this.container.classList.add('out-page')
    }
    makeDraggable () {
        this.container.style.transitionDuration = '0s';
        this.draggable = new DragHandler(this.container, {x: 50, y: 0});
    }
    comeOut () {
        this.container.classList.add('out');
        after(1000, this.makeDraggable.bind(this))
    }
}

export default Seed