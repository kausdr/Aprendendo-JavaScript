var bt = document.querySelector("input#tabuada")

bt.addEventListener("click", gerarTabuada);

function gerarTabuada(){
    let txtnum = document.querySelector("input#n")
    let res =  document.querySelector("div#res")
    let tab = document.querySelector('#seltab')

    if(txtnum.value.length <= 0){
        alert("Digite um número para gerar a tabuada!")
    }
    else{
        let n = Number(txtnum.value)
        tab.innerHTML = ''

        // -------- For Loop --------
        for(c = 0; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // pro js n faz tanto sentido, mas para outras linguagens é útil
            //item.text = n+' x '+c+' = '+n*c
            seltab.appendChild(item)
        }

        // -------- While Loop --------
        /*let c = 0
        while(c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            seltab.appendChild(item)
            c++
        }*/
    }
}


