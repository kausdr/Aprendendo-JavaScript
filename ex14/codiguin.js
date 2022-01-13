var bt = document.querySelector("input#add")
var bt2 = document.querySelector("input#fim")
var info = document.querySelector('div#info')

var valores = []

bt.addEventListener("click", addNaLista);
bt2.addEventListener("click", finalizar);

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione algum valor na lista primeiro!')
    }
    else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for(let i in valores){
            soma += valores[i]
            if(valores[i] > maior){
                maior = valores[i]
            }

            if(valores[i] < menor){
                menor = valores[i]
            }
        }

        let media = soma/total

        
        info.innerHTML = `<p>Total de valores cadastrados: ${total}`
        info.innerHTML += `<p>O maior valor é: ${maior}`
        info.innerHTML += `<p>O menor valor é: ${menor}`
        info.innerHTML += `<p>A soma de todos os valores é: ${soma}`
        info.innerHTML += `<p>A media dos valores é: ${media}`
    }
}


function isNumero(n){
    if(Number(n) >=1  && Number(n) <=100){
        return true
    }
    else{
        return false
    }
}


function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
    
}

function addNaLista(){
    let txtnum = document.querySelector("input#n")
    let res =  document.querySelector("div#res")
    let val = document.querySelector('#listval')

    if(isNumero(txtnum.value) && !inLista(txtnum.value, valores)){
        valores.push(Number(txtnum.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtnum.value} adicionado`
        val.appendChild(item)
        info.innerHTML = ''
    }
    else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }
        
    txtnum.value = ''
    txtnum.focus()
}


