const imagens = document.querySelectorAll('.animais-img img')
const texto = document.querySelectorAll('.animais-text')

function trocarTexto() {
    imagens.forEach((imagem, index) => {
        imagem.addEventListener('click', function () {
            texto.forEach(item => {
                item.classList.remove('ativo')
            })
            texto[index].classList.add('ativo', texto[index].dataset.anime)
        })
    })
}

trocarTexto()


// -----------------------------------------------------------------------------------------------------

const faqAsk = document.querySelectorAll('.faq-content dt')
const faqAnswer = document.querySelectorAll('.faq-content dd')

function accordionList() {
    faqAsk.forEach(ask => {
        ask.addEventListener('click', function () {
            ask.nextElementSibling.classList.toggle('ativo')
        })
    })
}

accordionList()


// -----------------------------------------------------------------------------------------------------

const lista = document.querySelectorAll('[href^="#"]')

function scrollSuave() {
    lista.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault()
            href = event.currentTarget.getAttribute('href')
            secao = document.querySelector(href)
            secao.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
}

scrollSuave()


// -----------------------------------------------------------------------------------------------------

const section = document.querySelectorAll('.scroll')
const altura = window.innerHeight * 0.6

function mostrarConteudo() {
    window.addEventListener('scroll', function () {
        section.forEach(item => {
            const alturaSecao = item.getBoundingClientRect().top
            if (alturaSecao < altura) {
                item.classList.add('ativo')
            }
            else {
                item.classList.remove('ativo')
            }
        })
    })
}

mostrarConteudo()


// -----------------------------------------------------------------------------------------------------