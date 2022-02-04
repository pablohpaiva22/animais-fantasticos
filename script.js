const imagens = document.querySelectorAll('.animais-img img')
const texto = document.querySelectorAll('.animais-text')

imagens.forEach((imagem, index) => {
    imagem.addEventListener('click', function () {
        texto.forEach(item => {
            item.classList.remove('ativo')
        })
        texto[index].classList.add('ativo')
    })
})


// -----------------------------------------------------------------------------------------------------


const faqAsk = document.querySelectorAll('.faq-content dt')
const faqAnswer = document.querySelectorAll('.faq-content dd')

faqAsk.forEach(ask => {
    ask.addEventListener('click', function () {
        ask.nextElementSibling.classList.toggle('ativo')
    })
})


// -----------------------------------------------------------------------------------------------------


const lista = document.querySelectorAll('[href^="#"]')

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


// -----------------------------------------------------------------------------------------------------


const section = document.querySelectorAll('.scroll')
const altura = window.innerHeight * 0.6

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


// -----------------------------------------------------------------------------------------------------


