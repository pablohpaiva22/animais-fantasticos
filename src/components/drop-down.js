export default function dropDown() {
    const $sobre = document.querySelector('[data-drop-down="dropDown"]')
    const $card = document.querySelector('.card-dropDown')

    function showMenu(event) {
        event.preventDefault()
        $card.classList.toggle('dropDown')
        outsideClick(this, function() {
            $card.classList.remove('dropDown')
        })
    }

    function outsideClick(element, callback) {
        const $html = document.documentElement
        $html.addEventListener('click', outsideClickCallback)
        function outsideClickCallback(event) {
            if(!element.contains(event.target)) 
                return callback()
        }
    }

    $sobre.addEventListener('click', showMenu)
}