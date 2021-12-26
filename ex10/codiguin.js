// dd um event listener pra chamar a função ao carregar o body
var corpo = document.querySelector('body')
corpo.addEventListener('onload', carregar())

//função que vai identificar as horas, mudar a mensagem e a imagem de acordo com as horas
function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('ft')
    
    var dateSistema = new Date()
    var hora = dateSistema.getHours()
    var min = dateSistema.getMinutes()

    //condições que mudam a imagem de acordo com as horas
    if (hora >=0 && hora < 12){
        //BOM DIA
        msg.innerHTML = `Agora são <strong>${hora}</strong> horas da manhã.`
        ft.src = 'img/manha.jpg'
        document.body.style.background = '#F9D962'
    }
    else if (hora >= 12 && hora < 19){
        //BOA TARDE
        msg.innerHTML =  `Agora são <strong>${hora}</strong> horas da tarde.`
        ft.src = 'img/tarde.jpg'
        document.body.style.background = '#A11E00'
    }
    else{
        //BOA NOITE
        msg.innerHTML = `Agora são <strong>${hora}</strong> horas da noite.`
        ft.src = 'img/noite.jpg'
        document.body.style.background = '#122D4A'
    }
}