let popup; 
const getMarcas = () => {
    const tarefas = fetch(`https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json`)
    tarefas
        .then(resposta => resposta.json())
        .then(marcas => {
            const ul = document.createElement('ul')
            marcas.forEach(marca => {
                const li = document.createElement('li')
                const logo = document.createElement('img')
                logo.src = marca.image?.optimized
                logo.addEventListener('click', () => abrirPopup(marca.name, logo.src)) 
                li.appendChild(logo)
                const nomeMarca = document.createElement('p')
                nomeMarca.textContent = marca.name
                li.appendChild(nomeMarca)
                ul.appendChild(li)
            })
            document.body.appendChild(ul)
        })
        .catch(erro => console.log(erro))
}
const abrirPopup = (nomeMarca, imagemSrc) => {
    if (popup) {
        popup.close();
    }
    popup = window.open('', 'popup', 'width=600,height=400');
    popup.document.write(`<img src="${imagemSrc}" alt="Imagem da marca"><p>${nomeMarca}</p>`);
}
const btnMarcas = document.querySelector("#marcas")
btnMarcas.addEventListener("click", getMarcas)
