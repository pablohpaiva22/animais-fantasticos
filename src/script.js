import TabNav from "./components/TabNav.js";
import AccordionList from "./components/AccordionList.js";
import ScrollSuave from "./components/ScrollSuave.js";
import mostrarConteudo from "./components/mostrar-conteudo.js";
import Modal from "./components/Modal.js";
import DropDown from "./components/drop-down.js";
import menuMobile from "./components/menu-mobile.js";
import animaNumeros from "./components/anima-numeros.js";
import horarioDeAtendimento from "./components/atendimento.js";
import animaisFetch from "./components/animaisFetch.js";
import DoeBiton from "./components/bitcoinFetch.js";

mostrarConteudo();
menuMobile();
animaNumeros();
horarioDeAtendimento();
animaisFetch();

const scrollSuave = new ScrollSuave('[href^="#"]');
scrollSuave.init();

const accordionList = new AccordionList(".faq-content dt");
accordionList.init();

const tabNav = new TabNav(".animais-img img", ".animais-text");
tabNav.init();

const doe = new DoeBiton(".bitcoinValor", "https://blockchain.info/ticker");
doe.init();

const modal = new Modal(
  '[data-modal="mostrar-modal"]',
  "[data-login]",
  '[data-modal-botao="fechar-modal"]'
);
modal.init();

const drowDown = new DropDown('[data-drop-down="dropDown"]', ".card-dropDown");
drowDown.init();
