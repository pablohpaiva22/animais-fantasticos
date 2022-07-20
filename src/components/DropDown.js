export default class DropDown {
  constructor($sobre, $card) {
    this.$sobre = document.querySelector($sobre);
    this.$card = document.querySelector($card);
    this.handleClick = this.handleClick.bind(this);
    this.outsideClickCallback = this.outsideClickCallback.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.$card.classList.toggle("dropDown");
    this.outsideClick();
  }

  outsideClick() {
    const $html = document.documentElement;
    $html.addEventListener("click", this.outsideClickCallback);
  }

  outsideClickCallback(event) {
    if (
      !event.target.contains(this.$sobre) &&
      !event.target.contains(this.$card)
    ) {
      return this.$card.classList.remove("dropDown");
    }
    return true;
  }

  init() {
    this.$sobre.addEventListener("click", this.handleClick);
    return this;
  }
}
