/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/AccordionList.js":
/*!*****************************************!*\
  !*** ./src/components/AccordionList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AccordionList)\n/* harmony export */ });\nclass AccordionList {\n  constructor(list) {\n    this.list = document.querySelectorAll(list);\n  }\n\n  toggleAccordion() {\n    this.nextElementSibling.classList.toggle(\"ativo\");\n  }\n\n  addEvent() {\n    this.list.forEach((item) => {\n      item.addEventListener(\"click\", this.toggleAccordion);\n    });\n  }\n\n  init() {\n    if (this.list.length) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/AccordionList.js?");

/***/ }),

/***/ "./src/components/DropDown.js":
/*!************************************!*\
  !*** ./src/components/DropDown.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropDown)\n/* harmony export */ });\nclass DropDown {\n  constructor($sobre, $card) {\n    this.$sobre = document.querySelector($sobre);\n    this.$card = document.querySelector($card);\n    this.handleClick = this.handleClick.bind(this);\n    this.outsideClickCallback = this.outsideClickCallback.bind(this);\n  }\n\n  handleClick(event) {\n    event.preventDefault();\n    this.$card.classList.toggle(\"dropDown\");\n    this.outsideClick();\n  }\n\n  outsideClick() {\n    const $html = document.documentElement;\n    $html.addEventListener(\"click\", this.outsideClickCallback);\n  }\n\n  outsideClickCallback(event) {\n    if (\n      !event.target.contains(this.$sobre) &&\n      !event.target.contains(this.$card)\n    ) {\n      return this.$card.classList.remove(\"dropDown\");\n    }\n    return true;\n  }\n\n  init() {\n    this.$sobre.addEventListener(\"click\", this.handleClick);\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/DropDown.js?");

/***/ }),

/***/ "./src/components/MenuMobile.js":
/*!**************************************!*\
  !*** ./src/components/MenuMobile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n// export default function menuMobile() {\n//   const button = document.querySelector(\".mobile-button\");\n//   const menu = document.querySelector(\".menu-mobile ul\");\n//   const sobre = document.querySelector(\".sobre a\");\n\n//   function menuMobile() {\n//     menu.classList.toggle(\"active\");\n\n//     outsideClick(this, function () {\n//       menu.classList.remove(\"active\");\n//     });\n//   }\n\n//   function outsideClick(element, callback) {\n//     const html = document.documentElement;\n//     html.addEventListener(\"click\", outsideClickCall);\n//     function outsideClickCall(event) {\n//       if (\n//         !element.contains(event.target) &&\n//         !event.target.contains(menu) &&\n//         !event.target.contains(sobre)\n//       ) {\n//         callback();\n//         html.removeEventListener(\"click\", outsideClickCall);\n//       }\n//     }\n//   }\n\n//   button.addEventListener(\"click\", menuMobile);\n// }\n\nclass MenuMobile {\n  constructor(button, menu, about) {\n    this.button = document.querySelector(button);\n    this.menu = document.querySelector(menu);\n    this.about = document.querySelector(about);\n    this.menuMobile = this.menuMobile.bind(this);\n    this.outsideClickCall = this.outsideClickCall.bind(this);\n  }\n\n  menuMobile() {\n    this.menu.classList.toggle(\"active\");\n    this.outsideClick();\n  }\n\n  outsideClick() {\n    const html = document.documentElement;\n    html.addEventListener(\"click\", this.outsideClickCall);\n  }\n\n  outsideClickCall(event) {\n    if (\n      !event.target.contains(this.menu)\n      && !event.target.contains(this.button)\n    ) {\n      this.menu.classList.remove(\"active\");\n    }\n  }\n\n  init() {\n    this.button.addEventListener(\"click\", this.menuMobile);\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/MenuMobile.js?");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(sectionModal, loginBtn, fecharX) {\n    this.$sectionModal = document.querySelector(sectionModal);\n    this.$loginBtn = document.querySelector(loginBtn);\n    this.$fecharX = document.querySelector(fecharX);\n\n    this.handleClickFecharX = this.handleClickFecharX.bind(this);\n  }\n\n  handleClickLoginBtn(event) {\n    event.preventDefault();\n    this.$sectionModal.classList.add(this.$sectionModal.dataset.modal);\n  }\n\n  handleClickFecharX() {\n    this.$sectionModal.classList.remove(this.$sectionModal.dataset.modal);\n  }\n\n  handleClickSectionModal(event) {\n    event.target.classList.remove(this.$sectionModal.dataset.modal);\n  }\n\n  addEvent() {\n    this.$loginBtn.addEventListener(\"click\", (event) => {\n      this.handleClickLoginBtn(event);\n    });\n    this.$fecharX.addEventListener(\"click\", this.handleClickFecharX);\n    this.$sectionModal.addEventListener(\"click\", (event) => {\n      this.handleClickSectionModal(event);\n    });\n  }\n\n  init() {\n    if (this.$sectionModal && this.$loginBtn && this.$fecharX) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/Modal.js?");

/***/ }),

/***/ "./src/components/MostrarConteudo.js":
/*!*******************************************!*\
  !*** ./src/components/MostrarConteudo.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MostrarConteudo)\n/* harmony export */ });\n// export default function mostrarConteudo() {\n//   const section = document.querySelectorAll(\".scroll\");\n//   const altura = window.innerHeight * 0.6;\n\n//   window.addEventListener(\"scroll\", () => {\n//     section.forEach((item) => {\n//       const alturaSecao = item.getBoundingClientRect().top;\n//       if (alturaSecao < altura) {\n//         item.classList.add(\"ativo\");\n//       } else if (item.classList.contains(\"ativo\")) {\n//         item.classList.remove(\"ativo\");\n//       }\n//     });\n//   });\n// }\n\nclass MostrarConteudo {\n  constructor(section) {\n    this.section = document.querySelectorAll(section);\n    this.height = window.innerHeight * 0.6;\n    this.mostrarConteudo = this.mostrarConteudo.bind(this);\n  }\n\n  mostrarConteudo() {\n    this.section.forEach((item) => {\n      const alturaSecao = item.getBoundingClientRect().top;\n      if (alturaSecao < this.height) {\n        item.classList.add(\"ativo\");\n      } else if (item.classList.contains(\"ativo\")) {\n        item.classList.remove(\"ativo\");\n      }\n    });\n  }\n\n  init() {\n    window.addEventListener(\"scroll\", this.mostrarConteudo);\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/MostrarConteudo.js?");

/***/ }),

/***/ "./src/components/ScrollSuave.js":
/*!***************************************!*\
  !*** ./src/components/ScrollSuave.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(link, options) {\n    this.link = link;\n    if (options === undefined) {\n      this.options = {\n        behavior: \"smooth\",\n        block: \"start\",\n      };\n    } else {\n      this.options = options;\n    }\n\n    this.scrolling = this.scrolling.bind(this);\n  }\n\n  getLink() {\n    const lista = document.querySelectorAll(this.link);\n    return lista;\n  }\n\n  scrolling(e) {\n    e.preventDefault();\n    const href = e.currentTarget.getAttribute(\"href\");\n    const secao = document.querySelector(href);\n    secao.scrollIntoView(this.options);\n  }\n\n  addEvent() {\n    this.getLink().forEach((item) => {\n      item.addEventListener(\"click\", this.scrolling);\n    });\n  }\n\n  init() {\n    if (this.link.length) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/ScrollSuave.js?");

/***/ }),

/***/ "./src/components/TabNav.js":
/*!**********************************!*\
  !*** ./src/components/TabNav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, texto) {\n    this.menu = document.querySelectorAll(menu);\n    this.texto = document.querySelectorAll(texto);\n  }\n\n  novoTexto(index) {\n    this.texto.forEach((item) => {\n      item.classList.remove(\"ativo\");\n    });\n\n    this.texto[index].classList.add(\"ativo\", this.texto[index].dataset.anime);\n  }\n\n  addEvent() {\n    this.menu.forEach((imagem, index) => {\n      imagem.addEventListener(\"click\", () => this.novoTexto(index));\n    });\n  }\n\n  init() {\n    if (this.menu && this.texto) {\n      this.addEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/TabNav.js?");

/***/ }),

/***/ "./src/components/anima-numeros.js":
/*!*****************************************!*\
  !*** ./src/components/anima-numeros.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaNumeros)\n/* harmony export */ });\nfunction animaNumeros() {\n  function initAnimaNumeros() {\n    const numeros = document.querySelectorAll(\".numeros-content span\");\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = total / 300;\n\n      let start = 0;\n      const timer = setInterval(() => {\n        start = Math.floor(start + incremento);\n        numero.innerText = start;\n        if (start > total) {\n          clearInterval(timer);\n        }\n      }, 0);\n    });\n  }\n\n  const numerosTarget = document.querySelector(\".numeros\");\n\n  function observing(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) observer.disconnect();\n    initAnimaNumeros();\n  }\n\n  const observer = new MutationObserver(observing);\n  observer.observe(numerosTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/anima-numeros.js?");

/***/ }),

/***/ "./src/components/animaisFetch.js":
/*!****************************************!*\
  !*** ./src/components/animaisFetch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaisFetch)\n/* harmony export */ });\n// export default function animaisFetch() {\n//   const container = document.querySelector(\".numeros-container\");\n\n//   async function fetchData(url) {\n//     const data = await fetch(url);\n//     const dataJSON = await data.json();\n//     dataJSON.forEach((animal) => {\n//       this.newElement(animal);\n//     });\n//   }\n\n//   fetchData(\"../src/data.json\");\n\n//   function newElement(animal) {\n//     const createDiv = document.createElement(\"div\");\n//     const div = container.appendChild(createDiv);\n//     div.innerHTML = `<div class=\"numeros-content\"><h3>${animal.especie}\n// </h3><span>${animal.quantidade}</span></div>`;\n//   }\n// }\n\nclass AnimaisFetch {\n  constructor(container, data) {\n    this.container = document.querySelector(container);\n    this.data = data;\n  }\n\n  async fetchData(url) {\n    const data = await fetch(url);\n    const dataJSON = await data.json();\n    dataJSON.forEach((animal) => {\n      this.newElement(animal);\n    });\n  }\n\n  init() {\n    this.fetchData(this.data);\n  }\n\n  newElement(animal) {\n    const createDiv = document.createElement(\"div\");\n    const div = this.container.appendChild(createDiv);\n    div.innerHTML = `<div class=\"numeros-content\"><h3>${animal.especie}</h3><span>${animal.quantidade}</span></div>`;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/animaisFetch.js?");

/***/ }),

/***/ "./src/components/atendimento.js":
/*!***************************************!*\
  !*** ./src/components/atendimento.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HorarioDeAtendimento)\n/* harmony export */ });\n// export default function horarioDeAtendimento() {\n//   const dataAtual = new Date();\n\n//   const horaAtual = dataAtual.getHours();\n//   const diaDaSemana = dataAtual.getDay();\n\n//   const atendimento = document.querySelector(\"[data-semana]\");\n//   const horaFuncionameto = atendimento.dataset.horario.split(\",\").map(Number);\n\n// const dataAcesso =\n//   atendimento.dataset.semana.split(\",\").map(Number).indexOf(diaDaSemana) !==\n//   -1;\n\n//   const horaAcesso =\n//     horaAtual > horaFuncionameto[0] && horaAtual < horaFuncionameto[1];\n\n//   if (dataAcesso && horaAcesso) {\n//     atendimento.classList.add(\"aberto\");\n//   }\n// }\n\nclass HorarioDeAtendimento {\n  constructor(diasAtendimento) {\n    this.diasAtendimento = document.querySelector(diasAtendimento);\n    this.dataAtual = new Date();\n  }\n\n  horaAtual() {\n    return this.dataAtual.getHours();\n  }\n\n  diaDaSemana() {\n    return this.dataAtual.getDay();\n  }\n\n  horaFuncionameto() {\n    return this.diasAtendimento.dataset.horario.split(\",\").map(Number);\n  }\n\n  dataAcesso() {\n    const diaDaSemana = this.diaDaSemana();\n\n    return (\n      this.diasAtendimento.dataset.semana\n        .split(\",\")\n        .map(Number)\n        .indexOf(diaDaSemana) !== -1\n    );\n  }\n\n  horaAcesso() {\n    const horaFuncionameto = this.horaFuncionameto();\n    const horaAtual = this.dataAtual.getHours();\n\n    return horaAtual > horaFuncionameto[0] && horaAtual < horaFuncionameto[1];\n  }\n\n  init() {\n    const horaAcesso = this.horaAcesso();\n    const dataAcesso = this.dataAcesso();\n\n    if (horaAcesso && dataAcesso) {\n      this.atendimento.classList.add(\"aberto\");\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/atendimento.js?");

/***/ }),

/***/ "./src/components/bitcoinFetch.js":
/*!****************************************!*\
  !*** ./src/components/bitcoinFetch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DoeBiton)\n/* harmony export */ });\n// export default function doeBitcoin() {\n//     const bitcoinShow = document.querySelector('.bitcoinValor')\n\n//     async function bitcoinFetch(url) {\n//         const bitcoin = await fetch(url)\n//         const bitcoinJSON = await bitcoin.json()\n//         bitcoinShow.innerText = (100 / bitcoinJSON.BRL.buy).toFixed(4)\n//     }\n\n//     bitcoinFetch('https://blockchain.info/ticker')\n// }\n\nclass DoeBiton {\n  constructor(bitcoinValor, url) {\n    this.bitcoinValor = document.querySelector(bitcoinValor);\n    this.url = url;\n  }\n\n  async bitcoinFetch(url) {\n    const bitcoin = await fetch(url);\n    const bitcoinJSON = await bitcoin.json();\n    this.bitcoinValor.innerText = (100 / bitcoinJSON.BRL.buy).toFixed(4);\n  }\n\n  init() {\n    this.bitcoinFetch(this.url);\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/bitcoinFetch.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TabNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TabNav.js */ \"./src/components/TabNav.js\");\n/* harmony import */ var _components_AccordionList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AccordionList.js */ \"./src/components/AccordionList.js\");\n/* harmony import */ var _components_ScrollSuave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ScrollSuave.js */ \"./src/components/ScrollSuave.js\");\n/* harmony import */ var _components_MostrarConteudo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MostrarConteudo.js */ \"./src/components/MostrarConteudo.js\");\n/* harmony import */ var _components_Modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Modal.js */ \"./src/components/Modal.js\");\n/* harmony import */ var _components_DropDown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/DropDown.js */ \"./src/components/DropDown.js\");\n/* harmony import */ var _components_MenuMobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MenuMobile.js */ \"./src/components/MenuMobile.js\");\n/* harmony import */ var _components_atendimento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/atendimento.js */ \"./src/components/atendimento.js\");\n/* harmony import */ var _components_bitcoinFetch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bitcoinFetch.js */ \"./src/components/bitcoinFetch.js\");\n/* harmony import */ var _components_animaisFetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/animaisFetch */ \"./src/components/animaisFetch.js\");\n/* harmony import */ var _components_anima_numeros__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/anima-numeros */ \"./src/components/anima-numeros.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_components_anima_numeros__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\nconst horarioDeAtendimento = new _components_atendimento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"[data-semana]\");\nhorarioDeAtendimento.init();\n\nconst animaisFetch = new _components_animaisFetch__WEBPACK_IMPORTED_MODULE_9__[\"default\"](\".numeros-container\", \"../src/data.json\");\nanimaisFetch.init();\n\nconst scrollSuave = new _components_ScrollSuave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[href^=\"#\"]');\nscrollSuave.init();\n\nconst accordionList = new _components_AccordionList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".faq-content dt\");\naccordionList.init();\n\nconst tabNav = new _components_TabNav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".animais-img img\", \".animais-text\");\ntabNav.init();\n\nconst doe = new _components_bitcoinFetch_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](\".bitcoinValor\", \"https://blockchain.info/ticker\");\ndoe.init();\n\nconst modal = new _components_Modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n  '[data-modal=\"mostrar-modal\"]',\n  \"[data-login]\",\n  '[data-modal-botao=\"fechar-modal\"]'\n);\nmodal.init();\n\nconst drowDown = new _components_DropDown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\n  '[data-drop-down=\"dropDown\"] a',\n  \".card-dropDown\"\n);\ndrowDown.init();\n\nconst mostrarConteudo = new _components_MostrarConteudo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\".scroll\");\nmostrarConteudo.init();\n\nconst menuMobile = new _components_MenuMobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\n  \".mobile-button\",\n  \".menu-mobile ul\",\n  \".sobre a\"\n);\nmenuMobile.init();\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;