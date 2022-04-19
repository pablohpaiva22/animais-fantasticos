import trocarTexto from "./funcoes/trocar-texto.js"
import accordionList from "./funcoes/accordion-list.js"
import ScrollSuave from "./funcoes/ScrollSuave.js"
import mostrarConteudo from "./funcoes/mostrar-conteudo.js"
import modal from "./funcoes/modal.js"
import tooltip from "./funcoes/tooltip.js"
import dropDown from "./funcoes/drop-down.js"
import menuMobile from "./funcoes/menu-mobile.js"
import animaNumeros from "./funcoes/anima-numeros.js"
import horarioDeAtendimento from "./funcoes/atendimento.js"
import animaisFetch from "./funcoes/animaisFetch.js"
import doeBitcoin from "./funcoes/bitcoinFetch.js"

trocarTexto()
accordionList()
mostrarConteudo()
modal()
tooltip()
dropDown()
menuMobile()
animaNumeros()
horarioDeAtendimento()
animaisFetch()
doeBitcoin()

const scrollSuave = new ScrollSuave('[href^="#"]')
scrollSuave.init()