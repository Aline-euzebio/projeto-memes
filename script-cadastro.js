async function cadastrarMeme() {
    const url = 'https://66fc5de2c3a184a84d16e0ce.mockapi.io/api/memes'
    const linkDigitado = document.querySelector('#linkImagem').value
    const tituloDigitado = document.querySelector('#titulo').value
    let dadosMeme = {
        linkImagem : linkDigitado,
        dataCadastro: new Date(),
        titulo : tituloDigitado,
        likes: 0
    }

    const resposta = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosMeme)
    })
    alert('Meme cadastrado com sucesso!')
}

