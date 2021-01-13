class IntersectionObserverManager {

    constructor() {

        let openTitleObserver = new MyObserver('openTitle', 'openTitleLoaded')
        let revealTitleObserver = new MyObserver('revealTitle', 'revealTitleLoaded')

        this.redimensionnement()
        window.addEventListener('rezize', this.redimensionnement, false)
    }

    redimensionnement() {

        if (window.matchMedia("(min-width: 768px)").matches) {
            let revealCategoryTitleObserver = new MyObserver('revealCategoryTitle', 'revealCategoryTitleLoaded')
        } else {
            let revealCategoryTitleObserver = null
        }

    }

}

let intersectionObserverManager = new IntersectionObserverManager()