export default function scrollSuave() {
    const lista = document.querySelectorAll('[href^="#"]')
    lista.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault()
            const href = event.currentTarget.getAttribute('href')
            const secao = document.querySelector(href)
            secao.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
}