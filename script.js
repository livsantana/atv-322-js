const body = document.querySelector("body")

const livros = [
    {
        titulo: "O Conto da Aia",
        autor: 'Margareth Atwood',
        genero: "Distopia",
        editora: "Rocco",
        anoLancamento: "1985"
    },

    {
        titulo: "A Guerra dos Tronos",
        autor: 'George R.R Martin',
        genero: "Fantasia",
        editora: "Leya",
        anoLancamento: "1985"
    },
    
    {
        titulo: "Caraval",
        autor: 'Stephanie Garber',
        genero: "Fantasia",
        editora: "Gutenberg",
        anoLancamento: "2015"
    },
    
    {
        titulo: "Vilão",
        autor: 'V.E Schwab',
        genero: "Fantasia urbana",
        editora: "Record",
        anoLancamento: "2019"
    },
    
    {
        titulo: "O Sol e A Estrela",
        autor: "Rick Riordan",
        genero: "Fantasia",
        editora: "Intriseca",
        anoLancamento: "2022"
    }
    
]

let contador = 0

while (contador <= livros.length){
    body.innerHTML += `
    <div>
        <p>Título: ${livros[contador.titulo]}</p>
        <p>Autor: ${livros[contador.autor]}</p>
        <p>Gênero: ${livros[contador.genero]}</p>
        <p>Editora: ${livros[contador.editora]}</p>
        <p>Ano de lançamento: ${livros[contador.anoLancamento]}</p>
    </div>
    `

    contador++
}
