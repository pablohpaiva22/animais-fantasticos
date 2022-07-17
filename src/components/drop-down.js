export default class DropDown {
  constructor($sobre, $card) {
    this.$sobre = document.querySelector($sobre);
    this.$card = document.querySelector($card);
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.$card.classList.toggle("dropDown");

    this.outsideClick(this.$sobre, this.$card);
  }

  outsideClick(element, card) {
    const $html = document.documentElement;

    function outsideClickCallback(event) {
      if (!element.contains(event.target)) {
        return card.classList.remove("dropDown");
      }
      return true;
    }

    $html.addEventListener("click", outsideClickCallback);
  }

  init() {
    this.$sobre.addEventListener("click", this.showMenu);
  }
}
