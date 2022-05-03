export default class Modal {
  constructor(sectionModal, loginBtn, fecharX) {
    this.$sectionModal = document.querySelector(sectionModal);
    this.$loginBtn = document.querySelector(loginBtn);
    this.$fecharX = document.querySelector(fecharX);
  }

  handleClickLoginBtn(event) {
    event.preventDefault();
    this.$sectionModal.classList.add(this.$sectionModal.dataset.modal);
  }

  handleClickFecharX() {
    this.$sectionModal.classList.remove(this.$sectionModal.dataset.modal);
  }

  handleClickSectionModal(event) {
    event.target.classList.remove(this.$sectionModal.dataset.modal);
  }

  addEvent() {
    this.$loginBtn.addEventListener("click", (event) => {
      this.handleClickLoginBtn(event);
    });
    this.$fecharX.addEventListener("click", () => this.handleClickFecharX());
    this.$sectionModal.addEventListener("click", (event) => {
      this.handleClickSectionModal(event);
    });
  }

  init() {
    if (this.$sectionModal && this.$loginBtn && this.$fecharX) {
      this.addEvent();
    }
  }
}
