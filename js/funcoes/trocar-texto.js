export default function trocarTexto() {
    
    const $imagens = document.querySelectorAll('.animais-img img')
    const $texto = document.querySelectorAll('.animais-text')

    $imagens.forEach((imagem, index) => {
        
        function novoTexto() {
            $texto.forEach(item => {
                item.classList.remove('ativo')
            })

            $texto[index].classList.add('ativo', $texto[index].dataset.anime)
        }

        imagem.addEventListener('click', novoTexto)
    })

}