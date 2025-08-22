var vel = 74.7
console.log('O limite de velocidade é 60KM/H')
if (vel > 60) {
    console.log(`Você foi multado porque passou a ${vel}KM/H`)
    var excedente = vel - 60

    console.log(`Você excedeu o limite de velocidade em ${(vel - 60).toFixed(1)}KM/H`)
}
console.log('Digira sempre utilizando cinto de segurança')