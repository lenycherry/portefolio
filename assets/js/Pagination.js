class Pagination {
    constructor(element) {
        this.elements = document.getElementsByClassName(element)
        this.pages = document.getElementsByClassName('page')
        //Définis le nombre total de page en divisant le nombre de elementaire par pageContent(6) et
        //Ajoute une page supplémentaire s'il existe un modulo à la division.
        this.pageContent = 4
        this.totalPage
        this.currentPageIndicator = 1 //indique la page actuelle
        this.initPageNumber(this.totalPage)

        //Injecte les élements aux pages
        this.index = 0
        this.pageNumber = 0
        this.page = [] //Array(Nbr de page)(page) exemple : this.page[1][0]
        this.pushElement()

        //Affiche la première page d'élements
        this.initElement()
        this.pageIndex = 0
    }
    goToPage(index) {
        let currentPage = this.page[this.pageIndex]

        for (let i = 0; i < this.pageContent; i++) {
            let element = currentPage[0][i]
            if (element != undefined) {
                if (element.classList.contains("elem_visible")) {
                    element.classList.replace("elem_visible", "elem_invisible")
                }
            }
        }
        this.currentPageIndicator.classList.remove("page_active")
        this.currentPageIndicator = document.querySelector(".page" + (index + 1))
        this.currentPageIndicator.classList.add("page_active")

        currentPage = this.page[index]


        for (let i = 0; i < this.pageContent; i++) {
            let element = currentPage[0][i]

            if (element != undefined) {
                if (element.classList.contains("elem_invisible")) {
                    element.classList.replace("elem_invisible", "elem_visible")
                }
            }
        }
        this.pageIndex = index
    }
    initPageNumber(totalPage) {
        //Effectue une opération pour définir le nombre de page en divisant le nombre d'élements total par le nombre d'élements demandé par page.
        totalPage = Math.floor(this.elements.length / this.pageContent)

        //Si la division laisse un reste alors nous ajoutons une page.
        let lastPage = this.elements.length % this.pageContent

        if (lastPage != 0) {
            totalPage++
        }
        this.totalPage = totalPage

        //Pour chaque page : On ajoute une balise représentant la page dans le document
        // + Un évenement permettant d'afficher la page en question.
        for (let i = 0; i < totalPage; i++) {
            let pageContainer = document.getElementById("elem_pagination_pages")
            let newPage = document.createElement("div")
            newPage.className = "page page" + (i + 1)
            pageContainer.appendChild(newPage)
            newPage.addEventListener("click", e => {
                this.goToPage(i)
            })
        }
        this.currentPageIndicator = document.querySelector(".page1")
        this.currentPageIndicator.classList.add("page_active")
    }
    pushElement() {
        for (let i = 0; i < this.totalPage; i++) {
            this.pageNumber++
            let pageContent = []

            for (let i = 0; i < this.pageContent; i++) {
                pageContent.push(this.elements[this.index])
                this.index++
            }
            this.page.push([pageContent])
        }
    }
    initElement() {
        for (let i = 0; i < this.pageContent; i++) {
            if (this.elements[i] != undefined) {
                if (this.elements[i].classList.contains("elem_invisible")) {
                    this.elements[i].classList.replace('elem_invisible', "elem_visible")
                }
            }
        }
    }
}
let projectPagination = new Pagination('portefolio_project')

    