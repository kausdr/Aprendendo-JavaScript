//add um event listener no botao chamando a função ao clicar
var botao = document.querySelector('input#botao')
botao.addEventListener('click', verificar)

function verificar(){
    var dateSistema = new Date()
    var anoAtual = dateSistema.getFullYear()

    var txtanoNasc = document.querySelector('input#txtano')
    var anoNasc = Number(txtanoNasc.value)

    var sex = document.getElementsByName('radsex')
    var res = document.querySelector('div#res')


    if (anoNasc == 0 || anoNasc > anoAtual){
        window.alert('[ERRO] Esse ano não é válido!')
    }
    else{
        //pega qual é o gênero da pessoa e escreve o gênero e a idade
        var idade = anoAtual - anoNasc
        var genero = ''
        var faixa = ''

        //gera a imagem
        var img = document.createElement('img')
        img.setAttribute('id','ft')
        
        //verifica se é homem
        if(sex[0].checked){
            genero = 'homem'

            if(idade >= 0 && idade <= 10){
                //Criança
                faixa ='criança'
            }
            else if(idade < 18){
                //Adolescente
                faixa = 'adolescente'
                img.setAttribute('src','img/adolescente.jpg')
            }
            else if(idade <= 24 ){
                //Jovem Adulto
                faixa = 'jovem adulto'
                img.setAttribute('src', 'img/jovemAdulto.jpg')
            }
            else if(idade < 60){
                //Adulto
                faixa = 'adulto'
                img.setAttribute('src', 'img/adulto.jpg')
            }
            else{
                //Idoso
                faixa = 'idoso'
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }

        //verifica se é mulher
        else if(sex[1].checked){
            genero = 'mulher'

            if(idade >= 0 && idade <= 10){
                //Criança
                faixa ='criança'
            }
            else if(idade < 18){
                //Adolescente
                faixa = 'adolescente'
                img.setAttribute('src','img/adolescente.jpg')
            }
            else if(idade <= 24 ){
                //Jovem Adulto
                faixa = 'jovem adulta'
                img.setAttribute('src', 'img/jovemAdulto.jpg')
            }
            else if(idade < 60){
                //Adulto
                faixa = 'adulta'
                img.setAttribute('src', 'img/adulto.jpg')
            }
            else{
                //Idoso
                faixa = 'idosa'
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }

        //verifica se é outro
        else{
            genero = 'alguém'

            if(idade >= 0 && idade <= 10){
                //Criança
                faixa ='criança'
            }
            else if(idade < 18){
                //Adolescente
                faixa = 'adolescente'
                img.setAttribute('src','img/adolescente.jpg')
            }
            else if(idade <= 24 ){
                //Jovem Adulto
                faixa = 'jovem adulto'
                img.setAttribute('src', 'img/jovemAdulto.jpg')
            }
            else if(idade < 60){
                //Adulto
                faixa = 'adulto'
                img.setAttribute('src', 'img/adulto.jpg')
            }
            else{
                //Idoso
                faixa = 'idoso'
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }

        //mostra o resultado e anexa a img na div res
        res.innerHTML = `Identificamos ${genero} ${faixa} com ${idade} anos.</br>`
        res.appendChild(img)
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.borderRadius = '50%'
    }
}