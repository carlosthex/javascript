var agora = new Date()
        var hora = agora.getHours()
        var txth = window.document.getElementById('txth')
        var hora = 21

        txth.innerHTML = `Agora são ${hora} horas.`

        if (6 < hora && hora <= 12) {
            console.log('Bom dia')
            
            window.document.body.style.backgroundColor = '#D0C092'
        } else if (12 < hora && hora <= 18) {
            console.log('Boa tarde')
            window.document.body.style.backgroundColor = '#A67761'
        } else {
            console.log('Boa noite')
            window.document.body.style.backgroundColor = '#464847'
        }