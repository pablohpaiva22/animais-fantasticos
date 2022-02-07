export default function mostrarConteudo() {
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
}