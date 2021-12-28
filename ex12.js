// REPETIÇÕES usando WHILE Loop
/*
Teste lógico no INÍCIO
verifica se é verdade primeiro e depois executa

var pizza = 1

while (pizza <= 8){
    console.log(` Fatia ${pizza}`)
    pizza++
}
*/

/*
Teste lógico no FINAL
executa primeiro e depois verifica se é verdade
*/
var pizza = 1

do{
    console.log(`Fatia ${pizza}`)
    pizza++
} while (pizza <= 8)