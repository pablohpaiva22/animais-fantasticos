export default function menuMobile() {
  const button = document.querySelector(".mobile-button");
  const menu = document.querySelector(".menu-mobile ul");
  const sobre = document.querySelector(".sobre a");

  function menuMobile() {
    menu.classList.toggle("active");
    outsideClick(this, function () {
      menu.classList.remove("active");
    });
  }

  function outsideClick(element, callback) {
    const html = document.documentElement;
    html.addEventListener("click", outsideClickCall);
    function outsideClickCall(event) {
      if (
        !element.contains(event.target) &&
        !event.target.contains(menu) &&
        !event.target.contains(sobre)
      ) {
        callback();
        html.removeEventListener("click", outsideClickCall);
      }
    }
  }

  button.addEventListener("click", menuMobile);
}
