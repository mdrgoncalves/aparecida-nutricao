const botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();

    const form = document.querySelector('#form-adiciona');
    let paciente = obtemPacienteDoFormulario(form);

    let erros = validaPaciente(paciente);

    if(erros.length > 0) {
        exibeMensagensDeErro(erros);      
        return;
    }
    
    adicionaPacienteNaTabela(paciente);

    form.reset();

    let mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = '';
});

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente);
    const tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

}

function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function exibeMensagensDeErro(erros) {
    let mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = '';

    erros.forEach(erro => {
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function montaTd(dado, classe) {
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    let erros = [];

    if(paciente.nome.length == 0) erros.push('O nome n??o pode ser em branco');
    if(!validaPeso(paciente.peso)) erros.push('Peso inv??lido!');
    if(!validaAltura(paciente.altura)) erros.push('Altura inv??lida!');
    if(paciente.gordura.length == 0) erros.push('A gordura n??o pode ser em branco');
    if(paciente.peso.length == 0) erros.push('O peso n??o pode ser em branco');
    if(paciente.altura.length == 0) erros.push('A altura n??o pode ser em branco');

    return erros;
}
