var botao = document.querySelector('input#botao')

botao.addEventListener('click', contar)


function contar(){
    let inicio = document.querySelector('input#txtinicio')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpasso')
    let res  = document.querySelector('div#res')

    if(passo.value <= 0){
        alert('Intervalo inválido!')
        passo.value = 1
    }
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Preencha todos os campos!')
    }
    else{
        res.innerHTML = `Contando: <strong><br>De ${inicio.value}<br>Até ${fim.value}<br>De ${passo.value} em ${passo.value}<br><strong>`

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // ----------------------- for loop -----------------------
        /*for(c = i; c <= f; c += p){
            res.innerHTML  += ` ${c} \u{1F449}`
        }*/

        // ---------- while loop (teste lógio no início) ----------
        /*while(i <= f){
            res.innerHTML += `${i} \u{1F449}`
            i += p
        }*/

        // ---------- while loop (teste lógio no final) ------------
        if(i < f){
            do{
                res.innerHTML += `${i} \u{1F449}`
                i += p
            } while (i <= f)
        }
        else{
            do{
                res.innerHTML += `${i} \u{1F449}`
                i -= p
            } while (i >= f)
        }

        res.innerHTML += ' \u{1F3C1}'

    }

    
    
}