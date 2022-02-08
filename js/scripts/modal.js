export default function modal() {
    const modal = document.querySelector('[data-modal="mostrar-modal"]')
    const login = document.querySelector('.header-box ul li:last-child')
    const botao = document.querySelector('[data-modal-botao="fechar-modal"')

    login.addEventListener('click', function(event) {
        event.preventDefault()
        modal.classList.add(modal.dataset.modal)
    })

    botao.addEventListener('click', function() {
        modal.classList.remove(modal.dataset.modal)
    })

    modal.addEventListener('click', function(event) {
        event.target.classList.remove(modal.dataset.modal)
    })
    document.addEventListener('keydown', function(event) {
        const e = new KeyboardEvent("keydown", { key : "ESC"});
        if(e) {
            modal.classList.remove(modal.dataset.modal)
        }
    })
}