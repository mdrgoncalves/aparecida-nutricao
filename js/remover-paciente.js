const tabela = document.querySelector('table');

tabela.addEventListener('dblclick', (evento) => {
    let alvoEvento = evento.target;
    let paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.classList.add('fadeOut');

    setTimeout(() => {
        paiDoAlvo.remove();
    }, 500);
});
