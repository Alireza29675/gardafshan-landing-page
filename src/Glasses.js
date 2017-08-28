class Glasses {
    constructor (query) {
        this.container = $(query)
        this.container.onmousedown = () => { this.container.classList.toggle('tilt') }
    }
    tilt () {
        this.container.classList.add('tilt')
    }
    untilt () {
        this.container.classList.remove('tilt')
    }
}

export default Glasses