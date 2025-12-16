function idade() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique o campo da data e tente novamente!`)
    } else {
        var idade = ano - Number(fano.value)
        var sexo = document.getElementsByName("radsex")
        var genero = []
        var pessoa = []
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero[0] = "Masculino"
            genero[1] = "mas"
        } else {
            genero[0] = "Feminino"
            genero[1] = "fem"
        }

        if (idade >= 0 && idade < 12) {
            pessoa = 'crianca'
        } else if ( idade < 22) {
            pessoa = 'adolescente'
        } else if ( idade < 60) {
            pessoa = 'adulto'
        } else {
            pessoa = 'idoso'
        }

        img.setAttribute('src', `imagens/${genero[1]+'-'+pessoa+'.jpg'}`)

        res.innerHTML = `Você é ${genero[0]} e tem ${idade} anos.`
        res.appendChild(img)
        
    }
}