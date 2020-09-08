class OpenWindow {
    constructor(picture, currentWindow) {
        this.pictures = document.getElementsByClassName(picture)
        this.currentWindows = document.getElementsByClassName(currentWindow)
        this.initWindow()

    }
    initWindow(){
        for (let i = 0; i < this.pictures.length; i++) {
this.pictures[i].addEventListener('click',()=>{
    for (let i = 0; i < this.currentWindows.length; i++){
        this.currentWindows[i].classList.add("invisible_window")
    }
    this.currentWindows[i].classList.replace("invisible_window", "visible_window")
})
        }
    }
    
}
let projectOpenWindow = new OpenWindow('portefolio_project', 'portefolio_current')