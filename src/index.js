import ImageLoader from './ImageLoader'

class App {
    constructor () {
        this.imagesLoader = new ImageLoader('./assets/images', this.ready.bind(this))
    }
    ready () {
        console.log('done')
    }
}

const app = new App