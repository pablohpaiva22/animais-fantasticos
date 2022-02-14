export default function dropDown() {
    const sobre = document.querySelector('[data-drop-Down="dropDown"]')
    const card = document.querySelector('.card-dropDown')

    function stopOnClick(event) {
        event.preventDefault()
        card.classList.toggle('dropDown')
        outsideClick(this, function() {
            card.classList.remove('dropDown')
        })
    }

    function outsideClick(element, callback) {
        const html = document.documentElement
        html.addEventListener('click', outsideClickCall)
        function outsideClickCall(event) {
            if(!element.contains(event.target)) 
                return callback()
                html.removeEventListener('click', outsideClickCall)
        }
    }

    sobre.addEventListener('click', stopOnClick)
}