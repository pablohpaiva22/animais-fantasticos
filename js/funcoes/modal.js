export default function modal() {
    const sectionModal = document.querySelector('[data-modal="mostrar-modal"]')
    const login = document.querySelector('[data-login]')
    const fecharX = document.querySelector('[data-modal-botao="fechar-modal"')

    if(sectionModal && login && fecharX) {
        login.addEventListener('click', function(event) {
            event.preventDefault()
            sectionModal.classList.add(sectionModal.dataset.modal)
        })

        fecharX.addEventListener('click', function() {
            sectionModal.classList.remove(sectionModal.dataset.modal)
        })

        sectionModal.addEventListener('click', function(event) {
            event.target.classList.remove(sectionModal.dataset.modal)
        })
    }
}