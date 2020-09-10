class SlideWindow {
    constructor(picture, currentWindow, closeBtn) {
        this.pictures = document.getElementsByClassName(picture)
        this.currentWindows = document.getElementsByClassName(currentWindow)
        this.closeBtns = document.getElementsByClassName(closeBtn)

        this.initWindow()
    }
    initWindow() {
        for(let i = 0; i < this.closeBtns.length; i++){
            this.closeBtns[i].addEventListener('click',() =>{
                this.currentWindows[i].classList.replace("visible_window", "invisible_window")
            })
        }
        for (let i = 0; i < this.pictures.length; i++) {
            this.pictures[i].addEventListener('click', () => {
                for (let i = 0; i < this.currentWindows.length; i++) {
                    this.currentWindows[i].classList.add("invisible_window")
                }
                this.currentWindows[i].classList.replace("invisible_window", "visible_window")
            })
        }
    }
}
let projectSlideWindow = new SlideWindow('portefolio_project', 'portefolio_current', 'close_current_window')