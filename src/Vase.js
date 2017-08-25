const vaseEvolutionQueue = ['empty', 'soiled', 'seeded', 'filled', 'wet', 'green']

class Vase {
    constructor (query) {
        this.container = $(query)
        this.state = 'empty'
    }
    set state (to) {
        this._state = to
        this.container.setAttribute('data-state', to)
    }
    get state () {
        return this._state
    }
    next () {
        const nextIndex = vaseEvolutionQueue.indexOf(this.state) + 1
        this.state = vaseEvolutionQueue[Math.min(nextIndex, vaseEvolutionQueue.length - 1)]
    }
}

export default Vase