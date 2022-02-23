export default function horarioDeAtendimento() {
    const dataAtual = new Date()

    const horaAtual = dataAtual.getHours()
    const diaDaSemana = dataAtual.getDay()

    const atendimento = document.querySelector('[data-semana]')
    const horaFuncionameto = atendimento.dataset.horario.split(',').map(Number)

    const dataAcesso = atendimento.dataset.semana.split(',').map(Number).indexOf(diaDaSemana) !== -1
    const horaAcesso = horaAtual > horaFuncionameto[0] && horaAtual < horaFuncionameto[1]

    if(dataAcesso && horaAcesso) {
        atendimento.classList.add('aberto')
    }
}