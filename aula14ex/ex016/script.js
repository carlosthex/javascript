function contar() {
    var txti = window.document.getElementById('txti')
    var txtf = window.document.getElementById('txtf')
    var txtp = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    var inicio = Number(txti.value)
    var fim = Number(txtf.value)
    var passo = Number(txtp.value)
    var i = 0
    res.innerHTML = `Contando:</br>`

    if(txti.value == '' || txtf.value == '') {
        res.innerHTML = 'Impossível contar!'
    } else if (passo == 0 || passo < 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
        for(i=inicio;i<=fim;i+=passo) {
        res.innerHTML += (`${i}	&#128073`)
        }
    } else {
        for(i=inicio;i<=fim;i+=passo) {
            res.innerHTML += (`${i}	&#128073`)
        }
    }
    if(i>=fim) {
        res.innerHTML += (`&#127937`)
    }
}