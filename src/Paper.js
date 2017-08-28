class Paper {
    constructor (query, game) {
        this.game = game;
        this.container = $(query);
        this.items = $$(query + ' li');
        console.log(this.items);
        this.itemIndex = 0;
    }
    comeOut () {
        this.container.classList.add('out')
    }
    bold () {
        this.container.classList.add('bold');
        after(2000, ()=>{ this.container.classList.remove('bold') })
    }
    next () {
        const duration = this.itemIndex === 0 ? 0 : 1000;
        if (this.itemIndex > 0) this.items[this.itemIndex-1].classList.add('tick');
        if (this.itemIndex < this.items.length) { after(duration, ()=>{
            this.bold()
            this.items[this.itemIndex].classList.add('active');
            this.itemIndex++
        }) } else {
            this.game.onDone()
        }
    }
}

export default Paper