class Box {
    constructor (query) {
        this.container = $(query);
        this.openBoxImage = $(query + ' .open');
        this.closeBoxImage = $(query + ' .close');
        window.addEventListener('resize', this.fixSizes.bind(this));
    }
    fixSizes () {
        this.openBoxImage.style.width = (this.closeBoxImage.offsetWidth * (464 / 300)) + 'px';
        this.openBoxImage.style.marginLeft = (this.closeBoxImage.offsetWidth / -200) + 'px';
        window.areaDistFromTop = (this.closeBoxImage.offsetWidth * (11 / 28));
        $('.game > .area').style.top = areaDistFromTop + 'px';
        $('.game > .area').style.height = (window.innerHeight - areaDistFromTop) + 'px'
    }
    open () {
        this.fixSizes();
        this.container.classList.add('open')
    }
    close () {
        this.fixSizes();
        this.container.classList.remove('open')
    }
}

export default Box