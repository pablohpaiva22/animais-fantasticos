export default class TabNav {
  constructor(menu, texto) {
    this.menu = document.querySelectorAll(menu);
    this.texto = document.querySelectorAll(texto);
  }

  novoTexto(index) {
    this.texto.forEach((item) => {
      item.classList.remove("ativo");
    });

    this.texto[index].classList.add("ativo", this.texto[index].dataset.anime);
  }

  addEvent() {
    this.menu.forEach((imagem, index) => {
      imagem.addEventListener("click", () => this.novoTexto(index));
    });
  }

  init() {
    if (this.menu && this.texto) {
      this.addEvent();
    }
  }
}
