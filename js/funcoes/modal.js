export default function modal() {
    const $sectionModal = document.querySelector('[data-modal="mostrar-modal"]')
    const $loginBtn = document.querySelector('[data-login]')
    const $fecharX = document.querySelector('[data-modal-botao="fechar-modal"')

    if($sectionModal && $loginBtn && $fecharX) {
        $loginBtn.addEventListener('click', function(event) {
            event.preventDefault()
            $sectionModal.classList.add($sectionModal.dataset.modal)
        })

        $fecharX.addEventListener('click', function() {
            $sectionModal.classList.remove($sectionModal.dataset.modal)
        })

        $sectionModal.addEventListener('click', function(event) {
            event.target.classList.remove($sectionModal.dataset.modal)
        })
    }
}