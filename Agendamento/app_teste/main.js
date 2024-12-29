const nomesBaixistas = ["Duca Tambasco", "Vitão", "Braguinha"];
const nomesBateristas = ["Walter", "Fininho", "Alexandre Aposan"];
const nomesGuitarristas = ["Cacau Santos", "Juninho Afram", "Felipe Eubank"];

// Função para salvar seleção no Local Storage
function saveSelection(role, name) {
    let selections = JSON.parse(localStorage.getItem('selections')) || {};
    selections[role] = name;
    localStorage.setItem('selections', JSON.stringify(selections));
}

// Função para carregar seleções do Local Storage
function loadSelections() {
    let selections = JSON.parse(localStorage.getItem('selections')) || {};
    if (selections['baixista']) {
        selecaoBaixista.textContent = selections['baixista'];
    }
    if (selections['baterista']) {
        selecaoBaterista.textContent = selections['baterista'];
    }
    if (selections['guitarrista']) {
        selecaoGuitarrista.textContent = selections['guitarrista'];
    }
}

// Carregar seleções ao carregar a página
document.addEventListener('DOMContentLoaded', (event) => {
    loadSelections();
});

const selecaoBaixista = document.querySelector("#selecionarBaixista"); // Seleciona o link pelo ID
let indiceBaixista = 0; // Inicializa o índice

selecaoBaixista.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link redirecione a página
    indiceBaixista = (indiceBaixista + 1) % nomesBaixistas.length; // Alterna entre os nomes
    const baixistaSelecionado = nomesBaixistas[indiceBaixista];
    selecaoBaixista.textContent = baixistaSelecionado; // Atualiza o texto do link
    saveSelection('baixista', baixistaSelecionado);
});

const selecaoBaterista = document.querySelector("#selecionarBaterista"); // Seleciona o link pelo ID
let indiceBaterista = 0; // Inicializa o índice

selecaoBaterista.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link redirecione a página
    indiceBaterista = (indiceBaterista + 1) % nomesBateristas.length; // Alterna entre os nomes
    const bateristaSelecionado = nomesBateristas[indiceBaterista];
    selecaoBaterista.textContent = bateristaSelecionado; // Atualiza o texto do link
    saveSelection('baterista', bateristaSelecionado);
});

const selecaoGuitarrista = document.querySelector("#selecionarGuitarrista"); // Seleciona o link pelo ID
let indiceGuitarrista = 0; // Inicializa o índice

selecaoGuitarrista.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link redirecione a página
    indiceGuitarrista = (indiceGuitarrista + 1) % nomesGuitarristas.length; // Alterna entre os nomes
    const guitarristaSelecionado = nomesGuitarristas[indiceGuitarrista];
    selecaoGuitarrista.textContent = guitarristaSelecionado; // Atualiza o texto do link
    saveSelection('guitarrista', guitarristaSelecionado);
});
