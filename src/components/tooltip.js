export default function tooltip() {
    const mapa = document.querySelector('[data-mapa]')
    const onMouseLeave = {
        tooltip: '',
        element: '',
        handleEvent() {
            this.tooltip.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }

    const onMouseMove = {
        tooltip: '',
        handleEvent(event) {
            this.tooltip.style.left = event.pageX + 20 + 'px'
            this.tooltip.style.top = event.pageY + 20 +'px'
        }
    }

    function criarDiv(element) {
        const novaDiv = document.createElement('div')
        const texto = element.getAttribute('aria-label')
        novaDiv.classList.add('tooltip')
        novaDiv.innerText = texto
        document.body.appendChild(novaDiv)
        return novaDiv
    }

    function onMouseOver(event) {
        const tooltip = criarDiv(this)

        onMouseLeave.tooltip = tooltip
        onMouseLeave.element = this
        onMouseMove.tooltip = tooltip

        this.addEventListener('mouseleave', onMouseLeave)
        this.addEventListener('mousemove', onMouseMove)
    }

    mapa.addEventListener('mouseover', onMouseOver)
}