const campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function() {

    const pacientes = document.querySelectorAll('.paciente');
    pacientes.forEach(paciente => {
        const tdNome = paciente.querySelector('.info-nome');
        let nome = tdNome.textContent;
        const expressao = new RegExp(this.value, 'i');

        if(expressao.test(nome)) {
            paciente.classList.remove('invisivel');
        } else {
            paciente.classList.add('invisivel');
        }
    });

});