const nomesBaixistas = ["Duca Tambasco", "Vitão", "Braguinha"];
const nomesBateristas = ["Walter", "Fininho", "Alexandre Aposan"];
const nomesGuitarristas = ["Cacau Santos", "Juninho Afram", "Felipe Eubank"];



const selecaoBaixista = document.querySelector("#selecionarBaixista"); // Seleciona o link pelo ID
let indiceSelecionado = 0; // Inicializa o índice

selecaoBaixista.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link redirecione a página
    indiceSelecionado = (indiceSelecionado + 1) % nomesBaixistas.length; // Alterna entre os nomes
    const baixistaSelecionado = nomesBaixistas[indiceSelecionado];
    selecaoBaixista.textContent = baixistaSelecionado; // Atualiza o texto do link
});


const selecaoBaterista = document.querySelector("#selecionarBaterista"); // Seleciona o link pelo ID
let indiceSelecionado1 = 0; // Inicializa o índice

selecaoBaterista.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link redirecione a página
    indiceSelecionado = (indiceSelecionado + 1) % nomesBateristas.length; // Alterna entre os nomes
    const bateristaSelecionado = nomesBateristas[indiceSelecionado];
    selecaoBaterista.textContent = bateristaSelecionado; // Atualiza o texto do link
});

const selecaoGuitarrista = document.querySelector("#selecionarGuitarrista"); // Seleciona o link pelo ID
let indiceSelecionado2 = 0; // Inicializa o índice

selecaoGuitarrista.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link redirecione a página
    indiceSelecionado = (indiceSelecionado + 1) % nomesGuitarristas.length; // Alterna entre os nomes
    const GuitarristaSelecionado = nomesGuitarristas[indiceSelecionado];
    selecaoGuitarrista.textContent = GuitarristaSelecionado; // Atualiza o texto do link
});
