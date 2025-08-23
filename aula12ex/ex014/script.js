var agora = new Date()
        var hora = agora.getHours()
        var msg = window.document.getElementById('msg')
        var img = window.document.getElementById('imagem')
        var hora = 19

        msg.innerHTML = `Agora são ${hora} horas.`

        if (6 <= hora && hora <= 12) {
            console.log('Bom dia')
            window.document.body.style.backgroundColor = '#D0C092'
            msg.innerHTML += '</br></br>Bom dia'
            img.src = 'manha.png'
        } else if (13 <= hora && hora <= 18) {
            console.log('Boa tarde')
            window.document.body.style.backgroundColor = '#A67761'
            msg.innerHTML += '</br></br>Boa tarde'
            img.src = 'tarde.png'
        } else {
            console.log('Boa noite')
            window.document.body.style.backgroundColor = '#464847'
            img.src = 'noite.png'
            msg.innerHTML += '</br></br>Boa noite'
        }