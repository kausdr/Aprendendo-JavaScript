var pacientes = document.querySelectorAll('.paciente')
console.log(pacientes)


/* -- a tabela chama o evento e procura quem foi clicado, excluindo o pai do objeto clicado -- */
var tabela = document.querySelector('table')

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
        event.target.parentNode.remove()
    },500)
})



/* -- remove o paciente direto, mas é chamado assim que a página carrega, não contando com os pacientes adicionados após a página ser carregada --

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log('fui clicado com duplo clique')
        this.remove()
    })
})*/