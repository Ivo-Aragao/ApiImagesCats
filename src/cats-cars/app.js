const criarImagemComDimensoes = (cat) => {
    const img = document.createElement('img')
    img.src = cat.url
    const dimensoes = document.createElement('p')
    dimensoes.textContent = `Dimensões: ${cat.width} x ${cat.height}`
    const divImagem = document.createElement('div')
    divImagem.appendChild(img)
    divImagem.appendChild(dimensoes)
    return divImagem
}
const buscarGatinhos = (e) => {
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const cats = JSON.parse(xhr.responseText)
                const gatinhosContainer = document.querySelector("#gatinhos")
                gatinhosContainer.innerHTML = '' 
                cats.forEach(cat => {
                    const divImagem = criarImagemComDimensoes(cat)
                    divImagem.addEventListener('click', () => mostrarDimensoes(cat))
                    gatinhosContainer.appendChild(divImagem)
                })
            } else {
                alert('Erro na requisição')
            }
        }
    }
    xhr.send()
}
const mostrarDimensoes = (cat) => {
    (`Dimensões da imagem: ${cat.width} x ${cat.height}`)
}
const btnMostrar = document.querySelector("#mostrar-gatinhos")
btnMostrar.addEventListener("click", buscarGatinhos)