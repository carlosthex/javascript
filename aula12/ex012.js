var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

console.log(`Agora são exatamente ${hora}:${minutos}:${segundos} horas.`)
if (6 < hora && hora <= 12) {
    console.log('Bom dia')
} else if (12 < hora && hora <= 18) {
    console.log('Boa tarde')
} else if (18 < hora && hora < 24) {
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}
