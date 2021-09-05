function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    tabContent[0].classList.add('ativo')

    if (tabMenu && tabContent) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () =>{
                activeTab(index)
            })
        })
    }
}

initTabNav()

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')

    if (accordionList.length){
        accordionList[0].classList.add('ativo')
        accordionList[0].nextElementSibling.classList.add('ativo')

        function activeAccordion() {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}

initAccordion()

function initSmoothScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(e) {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })

}

initSmoothScroll()

function scrollAnimation() {
    const sections = document.querySelectorAll('.js-scroll')
    if (sections.length) {
        const halfWindow = window.innerHeight * 0.6

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - halfWindow
                if (sectionTop < 0) {
                    section.classList.add('ativo')
                }
                else {
                    section.classList.remove('ativo')
                }
            })
        }

        window.addEventListener('scroll', animaScroll)
    }
    animaScroll()
}

scrollAnimation()