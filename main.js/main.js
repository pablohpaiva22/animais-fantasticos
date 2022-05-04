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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AccordionList)\n/* harmony export */ });\nclass AccordionList {\n  constructor(list) {\n    this.list = document.querySelectorAll(list);\n  }\n\n  toggleAccordion() {\n    this.nextElementSibling.classList.toggle(\"ativo\");\n  }\n\n  addEvent() {\n    this.list.forEach((item) => {\n      item.addEventListener(\"click\", this.toggleAccordion);\n    });\n  }\n\n  init() {\n    if (this.list.length) {\n      this.addEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/AccordionList.js?");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(sectionModal, loginBtn, fecharX) {\n    this.$sectionModal = document.querySelector(sectionModal);\n    this.$loginBtn = document.querySelector(loginBtn);\n    this.$fecharX = document.querySelector(fecharX);\n\n    this.handleClickFecharX = this.handleClickFecharX.bind(this);\n  }\n\n  handleClickLoginBtn(event) {\n    event.preventDefault();\n    this.$sectionModal.classList.add(this.$sectionModal.dataset.modal);\n  }\n\n  handleClickFecharX() {\n    this.$sectionModal.classList.remove(this.$sectionModal.dataset.modal);\n  }\n\n  handleClickSectionModal(event) {\n    event.target.classList.remove(this.$sectionModal.dataset.modal);\n  }\n\n  addEvent() {\n    this.$loginBtn.addEventListener(\"click\", (event) => {\n      this.handleClickLoginBtn(event);\n    });\n    this.$fecharX.addEventListener(\"click\", this.handleClickFecharX);\n    this.$sectionModal.addEventListener(\"click\", (event) => {\n      this.handleClickSectionModal(event);\n    });\n  }\n\n  init() {\n    if (this.$sectionModal && this.$loginBtn && this.$fecharX) {\n      this.addEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/Modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaNumeros)\n/* harmony export */ });\nfunction animaNumeros() {\r\n    function initAnimaNumeros() {\r\n        const numeros = document.querySelectorAll('.numeros-content span')\r\n        \r\n        numeros.forEach((numero) => {\r\n            const total = +numero.innerText\r\n            const incremento = total / 300\r\n            \r\n            let start = 0\r\n            const timer = setInterval(() => {\r\n                start = Math.floor(start + incremento)\r\n                numero.innerText = start\r\n                if(start > total) {\r\n                    clearInterval(timer)\r\n                }\r\n            }, 0)\r\n        })\r\n    }\r\n\r\n    const numerosTarget = document.querySelector('.numeros')\r\n\r\n    function observing(mutation) {\r\n        if(mutation[0].target.classList.contains('ativo'))\r\n        observer.disconnect()\r\n        initAnimaNumeros()\r\n    }\r\n\r\n    const observer = new MutationObserver(observing)\r\n    observer.observe(numerosTarget, {attributes: true})\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/anima-numeros.js?");

/***/ }),

/***/ "./src/components/animaisFetch.js":
/*!****************************************!*\
  !*** ./src/components/animaisFetch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaisFetch)\n/* harmony export */ });\nfunction animaisFetch() {\r\n  const container = document.querySelector(\".numeros-container\");\r\n\r\n  async function fetchData(url) {\r\n    const data = await fetch(url);\r\n    const dataJSON = await data.json();\r\n    dataJSON.forEach((animal) => {\r\n      newElement(animal);\r\n    });\r\n  }\r\n\r\n  fetchData(\"../src/data.json\");\r\n\r\n  function newElement(animal) {\r\n    const createDiv = document.createElement(\"div\");\r\n    const div = container.appendChild(createDiv);\r\n    div.innerHTML = `<div class=\"numeros-content\"><h3>${animal.especie}</h3><span>${animal.quantidade}</span></div>`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/animaisFetch.js?");

/***/ }),

/***/ "./src/components/atendimento.js":
/*!***************************************!*\
  !*** ./src/components/atendimento.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ horarioDeAtendimento)\n/* harmony export */ });\nfunction horarioDeAtendimento() {\r\n    const dataAtual = new Date()\r\n\r\n    const horaAtual = dataAtual.getHours()\r\n    const diaDaSemana = dataAtual.getDay()\r\n\r\n    const atendimento = document.querySelector('[data-semana]')\r\n    const horaFuncionameto = atendimento.dataset.horario.split(',').map(Number)\r\n\r\n    const dataAcesso = atendimento.dataset.semana.split(',').map(Number).indexOf(diaDaSemana) !== -1\r\n    const horaAcesso = horaAtual > horaFuncionameto[0] && horaAtual < horaFuncionameto[1]\r\n\r\n    if(dataAcesso && horaAcesso) {\r\n        atendimento.classList.add('aberto')\r\n    }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/atendimento.js?");

/***/ }),

/***/ "./src/components/bitcoinFetch.js":
/*!****************************************!*\
  !*** ./src/components/bitcoinFetch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ doeBitcoin)\n/* harmony export */ });\nfunction doeBitcoin() {\r\n    const bitcoinShow = document.querySelector('.bitcoinValor')\r\n\r\n    async function bitcoinFetch(url) {\r\n        const bitcoin = await fetch(url)\r\n        const bitcoinJSON = await bitcoin.json()\r\n        bitcoinShow.innerText = (100 / bitcoinJSON.BRL.buy).toFixed(4)\r\n    }\r\n\r\n    bitcoinFetch('https://blockchain.info/ticker')\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/bitcoinFetch.js?");

/***/ }),

/***/ "./src/components/drop-down.js":
/*!*************************************!*\
  !*** ./src/components/drop-down.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropDown)\n/* harmony export */ });\nfunction dropDown() {\r\n    const $sobre = document.querySelector('[data-drop-down=\"dropDown\"]')\r\n    const $card = document.querySelector('.card-dropDown')\r\n\r\n    function showMenu(event) {\r\n        event.preventDefault()\r\n        $card.classList.toggle('dropDown')\r\n        outsideClick(this, function() {\r\n            $card.classList.remove('dropDown')\r\n        })\r\n    }\r\n\r\n    function outsideClick(element, callback) {\r\n        const $html = document.documentElement\r\n        $html.addEventListener('click', outsideClickCallback)\r\n        function outsideClickCallback(event) {\r\n            if(!element.contains(event.target)) \r\n                return callback()\r\n        }\r\n    }\r\n\r\n    $sobre.addEventListener('click', showMenu)\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/drop-down.js?");

/***/ }),

/***/ "./src/components/menu-mobile.js":
/*!***************************************!*\
  !*** ./src/components/menu-mobile.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\nfunction menuMobile() {\r\n    const button = document.querySelector('.mobile-button')\r\n    const menu = document.querySelector('.menu-mobile ul')\r\n    const sobre = document.querySelector('.sobre a')\r\n\r\n    function menuMobile() {\r\n        menu.classList.toggle('active')\r\n        outsideClick(this, function() {\r\n            menu.classList.remove('active')\r\n        })\r\n    }\r\n\r\n    function outsideClick(element, callback) {\r\n        const html = document.documentElement\r\n        html.addEventListener('click', outsideClickCall)\r\n        function outsideClickCall(event) {\r\n            if(!element.contains(event.target) && !event.target.contains(menu) && !event.target.contains(sobre)) {\r\n                callback()\r\n                html.removeEventListener('click', outsideClickCall)\r\n            }\r\n        }\r\n    }\r\n\r\n    button.addEventListener('click', menuMobile)\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/menu-mobile.js?");

/***/ }),

/***/ "./src/components/mostrar-conteudo.js":
/*!********************************************!*\
  !*** ./src/components/mostrar-conteudo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mostrarConteudo)\n/* harmony export */ });\nfunction mostrarConteudo() {\r\n    const section = document.querySelectorAll('.scroll')\r\n    const altura = window.innerHeight * 0.6\r\n    \r\n    window.addEventListener('scroll', function () {\r\n        section.forEach(item => {\r\n            const alturaSecao = item.getBoundingClientRect().top\r\n            if (alturaSecao < altura) {\r\n                item.classList.add('ativo')\r\n            }\r\n            else if(item.classList.contains('ativo')) {\r\n                item.classList.remove('ativo')\r\n            }\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./src/components/mostrar-conteudo.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TabNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TabNav.js */ \"./src/components/TabNav.js\");\n/* harmony import */ var _components_AccordionList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AccordionList.js */ \"./src/components/AccordionList.js\");\n/* harmony import */ var _components_ScrollSuave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ScrollSuave.js */ \"./src/components/ScrollSuave.js\");\n/* harmony import */ var _components_mostrar_conteudo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mostrar-conteudo.js */ \"./src/components/mostrar-conteudo.js\");\n/* harmony import */ var _components_Modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Modal.js */ \"./src/components/Modal.js\");\n/* harmony import */ var _components_drop_down_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/drop-down.js */ \"./src/components/drop-down.js\");\n/* harmony import */ var _components_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu-mobile.js */ \"./src/components/menu-mobile.js\");\n/* harmony import */ var _components_anima_numeros_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/anima-numeros.js */ \"./src/components/anima-numeros.js\");\n/* harmony import */ var _components_atendimento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/atendimento.js */ \"./src/components/atendimento.js\");\n/* harmony import */ var _components_animaisFetch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/animaisFetch.js */ \"./src/components/animaisFetch.js\");\n/* harmony import */ var _components_bitcoinFetch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bitcoinFetch.js */ \"./src/components/bitcoinFetch.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_components_mostrar_conteudo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_components_drop_down_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_components_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_components_anima_numeros_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_components_atendimento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_components_animaisFetch_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_components_bitcoinFetch_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\nconst scrollSuave = new _components_ScrollSuave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[href^=\"#\"]');\nscrollSuave.init();\n\nconst accordionList = new _components_AccordionList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".faq-content dt\");\naccordionList.init();\n\nconst tabNav = new _components_TabNav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".animais-img img\", \".animais-text\");\ntabNav.init();\n\nconst modal = new _components_Modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n  '[data-modal=\"mostrar-modal\"]',\n  \"[data-login]\",\n  '[data-modal-botao=\"fechar-modal\"]'\n);\nmodal.init();\n\n\n//# sourceURL=webpack://animais-fantasticos/./src/script.js?");

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