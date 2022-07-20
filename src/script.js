import TabNav from "./components/TabNav.js";
import AccordionList from "./components/AccordionList.js";
import ScrollSuave from "./components/ScrollSuave.js";
import MostrarConteudo from "./components/MostrarConteudo.js";
import Modal from "./components/Modal.js";
import DropDown from "./components/DropDown.js";
import MenuMobile from "./components/MenuMobile.js";
import HorarioDeAtendimento from "./components/atendimento.js";
import DoeBiton from "./components/bitcoinFetch.js";
import AnimaisFetch from "./components/animaisFetch";
import animaNumeros from "./components/anima-numeros";

animaNumeros();

const horarioDeAtendimento = new HorarioDeAtendimento("[data-semana]");
horarioDeAtendimento.init();

const animaisFetch = new AnimaisFetch(".numeros-container", "../src/data.json");
animaisFetch.init();

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

const drowDown = new DropDown(
  '[data-drop-down="dropDown"] a',
  ".card-dropDown"
);
drowDown.init();

const mostrarConteudo = new MostrarConteudo(".scroll");
mostrarConteudo.init();

const menuMobile = new MenuMobile(
  ".mobile-button",
  ".menu-mobile ul",
  ".sobre a"
);
menuMobile.init();
