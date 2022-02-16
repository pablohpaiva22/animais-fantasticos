export default function animaNumeros() {
    function initAnimaNumeros() {
        const numeros = document.querySelectorAll('.numeros-content span')
        
        numeros.forEach((numero) => {
            const total = +numero.innerText
            const incremento = total / 300
            
            let start = 0
            const timer = setInterval(() => {
                start = Math.floor(start + incremento)
                numero.innerText = start
                if(start > total) {
                    clearInterval(timer)
                }
            }, 0)
        })
    }

    const numerosTarget = document.querySelector('.numeros')

    function observing(mutation) {
        if(mutation[0].target.classList.contains('ativo'))
        observer.disconnect()
        initAnimaNumeros()
    }

    const observer = new MutationObserver(observing)
    observer.observe(numerosTarget, {attributes: true})
}