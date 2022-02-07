export default function accordionList() {
    const faqAsk = document.querySelectorAll('.faq-content dt')
    faqAsk.forEach(ask => {
        ask.addEventListener('click', function () {
            ask.nextElementSibling.classList.toggle('ativo')
        })
    })
}