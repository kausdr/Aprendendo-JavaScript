var campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function(){
    console.log(this.value)

    var pacientes = document.querySelectorAll('.paciente')
    for(var i = 0; i<pacientes.length; i++){

        var paciente = pacientes[i]
        var tdNome = paciente.querySelector('.info-nome')
        var nome = tdNome.textContent

        //expressão regular
        var expressao = new RegExp(this.value,'i')

        //compara o nome com o texto da expressão regular
        if(!expressao.test(nome) && this.value.length > 0){
            paciente.classList.add('esconde')
        }
        else{
            paciente.classList.remove('esconde')
        }
    }
})