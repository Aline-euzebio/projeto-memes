async function carregarMemes() {
    const url = 'https://66fc5de2c3a184a84d16e0ce.mockapi.io/api/memes'
    const resposta = await fetch(url)
    const informacoesMemes = await resposta.json()
    const divGAleria = document.querySelector('#galeria')
    divGAleria.innerHTML = ''
    informacoesMemes.forEach(meme => {
        const htmlDoMeme = `
        <div class = "card">
            <h3>${meme.titulo}</h3>
            <img src="${meme.linkImagem}" alt="">
            <p>${meme.dataCadastro}</p>
            <p>${meme.likes}</p>
            <button class="btn-editar">Editar</button>
            <button class="btn-apagar">Apagar</button>
        </div>`
        divGAleria.innerHTML += htmlDoMeme
    });
}

carregarMemes()