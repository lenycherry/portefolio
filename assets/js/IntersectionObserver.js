class MyObserver {

    constructor(animation, animationLoaded) {
       this.animation = animation
       this.animationLoaded = animationLoaded 
        this.ratio = .1
        this.options = {
            root: null,
            rootMargin: "0px",
            threshold: this.ratio
        }
        document.documentElement.classList.add(this.animationLoaded)
        window.addEventListener('DOMContentLoaded', e => {
            this.observer = new IntersectionObserver(this.handleIntersect, this.options)
            this.targets = document.querySelectorAll("." + this.animation)
            this.targets.forEach((target) => {
                this.observer.observe(target)
            })
        })
    }
    handleIntersect =  (entries, observer)=> {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > this.ratio) {
                entry.target.classList.remove(this.animation)
                entry.target.classList.add(this.animationLoaded)
                observer.unobserve(entry.target)
            }
        })
    }
}


