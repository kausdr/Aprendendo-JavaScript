var btnBuscar = document.querySelector('#buscar-paciente')

btnBuscar.addEventListener("click", function(){
    console.log('buscando...')

    // faz a requisição do meu link http
    var xhr = new XMLHttpRequest()

    // abre a conexão com o http que a gente quer
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    // mostra na tela o que foi pego da requisição
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector('#erro-ajax')
        if(xhr.status == 200){
            erroAjax.classList.add('esconde')
            var resposta = xhr.responseText

            var pacientes = JSON.parse(resposta)
            
            pacientes.forEach(function(paciente){
            addPacienteNaTabela(paciente)
            })
        }
        else{
            /*erroAjax.style.display = 'block'*/

            erroAjax.classList.remove('esconde')
        }
         
    })

    // envia a requisição
    xhr.send()


})