// export default function mostrarConteudo() {
//   const section = document.querySelectorAll(".scroll");
//   const altura = window.innerHeight * 0.6;

//   window.addEventListener("scroll", () => {
//     section.forEach((item) => {
//       const alturaSecao = item.getBoundingClientRect().top;
//       if (alturaSecao < altura) {
//         item.classList.add("ativo");
//       } else if (item.classList.contains("ativo")) {
//         item.classList.remove("ativo");
//       }
//     });
//   });
// }

export default class MostrarConteudo {
  constructor(section) {
    this.section = document.querySelectorAll(section);
    this.height = window.innerHeight * 0.6;
    this.mostrarConteudo = this.mostrarConteudo.bind(this);
  }

  mostrarConteudo() {
    this.section.forEach((item) => {
      const alturaSecao = item.getBoundingClientRect().top;
      if (alturaSecao < this.height) {
        item.classList.add("ativo");
      } else if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }

  init() {
    window.addEventListener("scroll", this.mostrarConteudo);
    return this;
  }
}
