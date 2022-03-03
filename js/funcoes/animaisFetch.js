export default function animaisFetch() {
    const container = document.querySelector('.numeros-container')

    async function fetchData(url) {
        const data = await fetch(url)
        const dataJSON = await data.json()
        dataJSON.forEach(animal => {
            newElement(animal)
        })
    }

    fetchData('./js/data.json')

    function newElement(animal) {
        const createDiv = document.createElement('div')
        const div = container.appendChild(createDiv)
        div.innerHTML = `<div class="numeros-content"><h3>${animal.especie}</h3><span>${animal.quantidade}</span></div>`
    }
}