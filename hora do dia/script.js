function carregar(){
    var  msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()

    var hora = data.getHours()

    msg.innerHTML = `AGORA SÃO ${hora} HORAS!`

    if(hora >=0 && hora < 12)
    {
        //DIA
        img.src='../imagens/manha.png'
        document.body.style.background = '#FFDEAD'
    }

    else if(hora >=12 && hora <= 18)
    {
        //TARDE
        img.src='../imagens/tarde.png'
        document.body.style.background = '#87CEFA'
    }

    else
    {
        //NOITE
        img.src='../imagens/noite.png'
        document.body.style.background = '#191970'

    }
}   