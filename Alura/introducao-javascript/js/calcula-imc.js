// Passa por cada tr da classe paciente
var pacientes = document.querySelectorAll('.paciente')

// Passa por cada item (nesse caso, as tr com classe paciente)
for(var i = 0; pacientes.length; i++){

    var paciente = pacientes[i]

    //  Pega o valor das Td's
    var tdPeso = paciente.querySelector('.info-peso').textContent
    var tdAltura = paciente.querySelector('.info-altura').textContent
    var tdImc = paciente.querySelector('.info-imc')

    var pesoEhValido = validaPeso(tdPeso)
    var alturaEhValida = validaAltura(tdAltura)

    // Add uma classe para as Tr's com classe 'paciente' pra eu poder dar um feedback visual no css
    function addClasseInvalido(){
        paciente.classList.add('dado-invalido')
        tdImc.classList.add('invalido-detalhe')

    }

    //  Verifica se o peso e altura são válidos
    if (!pesoEhValido){
        pesoEhValido = false
        tdImc.textContent = 'Peso inválido'
        addClasseInvalido()
    }
    
    if (!alturaEhValida){
        alturaEhValida = false
        tdImc.textContent = 'Altura inválida'
        addClasseInvalido()
    }
        
    // Verifica se o peso e a altura são ambos válidos
    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(tdPeso,tdAltura)
        tdImc.textContent = imc
    }
    else if(pesoEhValido == false && alturaEhValida == false){
        tdImc.textContent = 'Peso e altura inválidos'
        addClasseInvalido()
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true
    }
    else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true
    }
    else{
        return false
    }
}

// Função que calcula o imc
function calculaImc(tdPeso,tdAltura){
    var imc = 0
    imc = tdPeso / (tdAltura*tdAltura)

    return imc.toFixed(2)
}