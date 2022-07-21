// export default function horarioDeAtendimento() {
//   const dataAtual = new Date();

//   const horaAtual = dataAtual.getHours();
//   const diaDaSemana = dataAtual.getDay();

//   const atendimento = document.querySelector("[data-semana]");
//   const horaFuncionameto = atendimento.dataset.horario.split(",").map(Number);

// const dataAcesso =
//   atendimento.dataset.semana.split(",").map(Number).indexOf(diaDaSemana) !==
//   -1;

//   const horaAcesso =
//     horaAtual > horaFuncionameto[0] && horaAtual < horaFuncionameto[1];

//   if (dataAcesso && horaAcesso) {
//     atendimento.classList.add("aberto");
//   }
// }

export default class HorarioDeAtendimento {
  constructor(diasAtendimento) {
    this.diasAtendimento = document.querySelector(diasAtendimento);
    this.dataAtual = new Date();
  }

  horaAtual() {
    return this.dataAtual.getHours();
  }

  diaDaSemana() {
    return this.dataAtual.getDay();
  }

  horaFuncionameto() {
    return this.diasAtendimento.dataset.horario.split(",").map(Number);
  }

  dataAcesso() {
    const diaDaSemana = this.diaDaSemana();

    return (
      this.diasAtendimento.dataset.semana
        .split(",")
        .map(Number)
        .indexOf(diaDaSemana) !== -1
    );
  }

  horaAcesso() {
    const horaFuncionameto = this.horaFuncionameto();
    const horaAtual = this.dataAtual.getHours();

    return horaAtual > horaFuncionameto[0] && horaAtual < horaFuncionameto[1];
  }

  init() {
    const horaAcesso = this.horaAcesso();
    const dataAcesso = this.dataAcesso();

    if (horaAcesso && dataAcesso) {
      this.diasAtendimento.classList.add("aberto");
    }
  }
}
