export default class AccordionList {
  constructor(list) {
    this.list = document.querySelectorAll(list);
  }

  toggleAccordion() {
    this.nextElementSibling.classList.toggle("ativo");
  }

  addEvent() {
    this.list.forEach((item) => {
      item.addEventListener("click", this.toggleAccordion);
    });
  }

  init() {
    if (this.list.length) {
      this.addEvent();
    }
    return this;
  }
}
