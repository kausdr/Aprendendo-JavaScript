// Condições Aninhadas
var horaAtual = new Date()
var hora = horaAtual.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora >= 6 && hora < 12){
    console.log('Bom Dia')
}
else if (hora >= 12 && hora < 19){
    console.log('Boa Tarde')
}
else{
    console.log('Boa Noite')
}