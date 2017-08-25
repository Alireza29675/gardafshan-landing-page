import ImageLoader from './ImageLoader'
import Box from './Box'
import Vase from './Vase'

window.$ = (query) => document.querySelector(query)
window.$$ = (query) => document.querySelectorAll(query)

class App {
    constructor () {
        this.imagesLoader = new ImageLoader('./assets/images', this.ready.bind(this))
        this.box = new Box('.game .box')
        this.box.open()
        this.vase = new Vase('.game .vase')
    }
    ready () {
        
    }
}

const app = new App