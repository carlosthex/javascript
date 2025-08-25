function tabuada () {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    
    var numero = Number(num.value)
    var i = 1

    if (num.value == '') {
        window.alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        for(i=1; i <= 10; i++) {
            var item = window.document.createElement('option')
            item.text = `${numero}x${i}=${numero*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}

