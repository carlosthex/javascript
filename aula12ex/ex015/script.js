function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = window.document.createElement('img') // cria um elemento img no html
    img.setAttribute('id', 'foto') //set do id como foto

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        if (fsex[0].checked) {
            genero = 'Homem'
            if (0 <= idade && idade < 10) {
                img.setAttribute('src', 'bebe-menino.png') // set do src da imagem correta
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (0 <= idade && idade < 10) {
                img.setAttribute('src', 'bebe-menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(img) // adicionar/mostra o elemento criado
    }
}