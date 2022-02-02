var botaoAdd  = document.querySelector('#adicionar-paciente')
botaoAdd.addEventListener('click', addPaciente)

// Extrai informações do form
var tbody = document.querySelector('#tabela-pacientes')


// Add as informações no form sempre que aperto o botão
function addPaciente(event){
    event.preventDefault()
    
    var form = document.querySelector('#form-adiciona')
    var paciente = obtemPacienteDoForm(form)

    var erros = validaPaciente(paciente)

    console.log(erros)

    if(erros.length > 0){
        exibeMsgDeErro(erros)
        return
    }

    addPacienteNaTabela(paciente)

    form.reset()
    var mensagensErro = document.querySelector('#msg-erro')
    mensagensErro.innerHTML = ''
}

// Pega as informações do form
function obtemPacienteDoForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

//Cria Td e Tr
function montaTr(paciente){

    // Cria tr e td
    var pacienteTr = document.createElement('tr')

    // Add as Td's na Tr
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    // Add as classes dos Tr's e Td's
    pacienteTr.classList.add('paciente')

    return pacienteTr
}

//Cria Td e armazena os dados do paciente e cria classe do Td
function montaTd(dado, classe){
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){

    var erros = []

    if(!validaPeso(paciente.peso)){
        erros.push('Peso inválido!') 
    }

    if(!validaAltura(paciente.altura)){
        erros.push('Altura inválida!')
    }

    if(paciente.nome.length == 0){
        erros.push('Nome inválido!')
    }

    if(paciente.gordura.length == 0){
        erros.push('Gordura inválida!')
    }

    if(paciente.peso.length == 0){
        erros.push('Peso inválido!')
    }

    if(paciente.altura.length == 0){
        erros.push('Altura inválida!')
    }

    return erros
    
}

function addPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function exibeMsgDeErro(erros){
    var ul = document.querySelector('ul#msg-erro')

    ul.innerHTML = ''

    erros.forEach(function(erro){
        var li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })

    var msgErro = document.querySelector("#msg-erro")
    msgErro.textContent = erro
    return msgErro
}