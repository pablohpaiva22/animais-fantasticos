// export default function animaisFetch() {
//   const container = document.querySelector(".numeros-container");

//   async function fetchData(url) {
//     const data = await fetch(url);
//     const dataJSON = await data.json();
//     dataJSON.forEach((animal) => {
//       this.newElement(animal);
//     });
//   }

//   fetchData("../src/data.json");

//   function newElement(animal) {
//     const createDiv = document.createElement("div");
//     const div = container.appendChild(createDiv);
//     div.innerHTML = `<div class="numeros-content"><h3>${animal.especie}
// </h3><span>${animal.quantidade}</span></div>`;
//   }
// }

export default class AnimaisFetch {
  constructor(container, data) {
    this.container = document.querySelector(container);
    this.data = data;
  }

  async fetchData(url) {
    const data = await fetch(url);
    const dataJSON = await data.json();
    dataJSON.forEach((animal) => {
      this.newElement(animal);
    });
  }

  init() {
    this.fetchData(this.data);
  }

  newElement(animal) {
    const createDiv = document.createElement("div");
    const div = this.container.appendChild(createDiv);
    div.innerHTML = `<div class="numeros-content"><h3>${animal.especie}</h3><span>${animal.quantidade}</span></div>`;
  }
}
