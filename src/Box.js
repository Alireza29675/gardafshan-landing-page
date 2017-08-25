class Box {
    constructor (query) {
        this.container = $(query)
        this.openBoxImage = $(query + ' .open')
        this.closeBoxImage = $(query + ' .close')
        this.openBoxImage.style.width = (this.closeBoxImage.offsetWidth * (464 / 300)) + 'px'
        this.openBoxImage.style.marginLeft = (this.closeBoxImage.offsetWidth / -200) + 'px'
        this.container.onclick = this.toggle.bind(this)
    }
    toggle () {
        this.container.classList.toggle('open')
    }
    open () {
        this.container.classList.add('open')
    }
    close () {
        this.container.classList.remove('open')
    }
}

export default Box