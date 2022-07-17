// export default function dropDown() {
//   const $sobre = document.querySelector('[data-drop-down="dropDown"]');
//   const $card = document.querySelector(".card-dropDown");

//   function showMenu(event) {
//     event.preventDefault();

//     $card.classList.toggle("dropDown");

//     outsideClick(this);
//   }

//   function outsideClick(element) {
//     const $html = document.documentElement;

//     $html.addEventListener("click", outsideClickCallback);

//     function outsideClickCallback(event) {
//       if (!element.contains(event.target)) {
//         return $card.classList.remove("dropDown");
//       }
//       return true;
//     }
//   }

//   $sobre.addEventListener("click", showMenu);
// }

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
