// export default function menuMobile() {
//   const button = document.querySelector(".mobile-button");
//   const menu = document.querySelector(".menu-mobile ul");
//   const sobre = document.querySelector(".sobre a");

//   function menuMobile() {
//     menu.classList.toggle("active");

//     outsideClick(this, function () {
//       menu.classList.remove("active");
//     });
//   }

//   function outsideClick(element, callback) {
//     const html = document.documentElement;
//     html.addEventListener("click", outsideClickCall);
//     function outsideClickCall(event) {
//       if (
//         !element.contains(event.target) &&
//         !event.target.contains(menu) &&
//         !event.target.contains(sobre)
//       ) {
//         callback();
//         html.removeEventListener("click", outsideClickCall);
//       }
//     }
//   }

//   button.addEventListener("click", menuMobile);
// }

export default class MenuMobile {
  constructor(button, menu, about) {
    this.button = document.querySelector(button);
    this.menu = document.querySelector(menu);
    this.about = document.querySelector(about);
    this.menuMobile = this.menuMobile.bind(this);
    this.outsideClickCall = this.outsideClickCall.bind(this);
  }

  menuMobile() {
    this.menu.classList.toggle("active");
    this.outsideClick();
  }

  outsideClick() {
    const html = document.documentElement;
    html.addEventListener("click", this.outsideClickCall);
  }

  outsideClickCall(event) {
    if (
      !event.target.contains(this.menu)
      && !event.target.contains(this.button)
    ) {
      this.menu.classList.remove("active");
    }
  }

  init() {
    this.button.addEventListener("click", this.menuMobile);
    return this;
  }
}
