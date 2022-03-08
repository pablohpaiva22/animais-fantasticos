export default function modal() {
    const $sectionModal = document.querySelector('[data-modal="mostrar-modal"]')
    const $loginBtn = document.querySelector('[data-login]')
    const $fecharX = document.querySelector('[data-modal-botao="fechar-modal"]')

    if($sectionModal && $loginBtn && $fecharX) {

        function handleClickLoginBtn(event) {
            event.preventDefault()
            $sectionModal.classList.add($sectionModal.dataset.modal)
        }

        function handleClickFecharX() {
            $sectionModal.classList.remove($sectionModal.dataset.modal)
        }

        function handleClickSectionModal(event) {
            event.target.classList.remove($sectionModal.dataset.modal)
        }

        $loginBtn.addEventListener('click', handleClickLoginBtn)
        $fecharX.addEventListener('click', handleClickFecharX)
        $sectionModal.addEventListener('click', handleClickSectionModal)
    }
}