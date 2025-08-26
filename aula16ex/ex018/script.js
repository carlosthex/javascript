let numero = document.getElementById('txtn')
let selnum = document.getElementById('selnum')
let res = document.getElementById('res')
let numeros = []
let i = 0

/*
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}*/

/*
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { indexOf verifica se o numero existe no array / -1 = false
        return true
    } else {
        return false
    }
}
*/

function adicionar() {
    if (Number(numero.value) > 100 || Number(numero.value) < 1) {
        return (alert('Valor inválido ou já encontrado na lista.'))
    }
    for (i=0; i<numeros.length;i++) {
        if (numeros[i] == Number(numero.value)) {
           return (alert('Valor inválido ou já encontrado na lista.'))
        }
    }
    let item = document.createElement('option')
    item.text = `Valor ${Number(numero.value)} adicionado.`
    selnum.appendChild(item)
    numeros.push(Number(numero.value))
    res.innerHTML = ''
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (numeros == '') {
        return (alert('Adicione valores antes de finalizar!'))
    }
    let soma = 0
    res.innerHTML = ''
    let menor = numeros[0]
    let maior = numeros[0]

    res.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
    for (i=0; i<numeros.length;i++) { // for (let pos in numeros)
        soma += numeros[i]
        if (numeros[i] > maior) {
            maior = numeros[i]
        }

        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A media dos valores digitados é ${(soma/numeros.length).toFixed(2)}.</p>`
}