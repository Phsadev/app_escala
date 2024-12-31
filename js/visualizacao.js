// Função para carregar seleções do Local Storage
function loadSelections() {
    let selections = JSON.parse(localStorage.getItem('selections')) || {};

    document.getElementById('baixista').textContent = selections['baixista'] || 'Escolha o participante';
    document.getElementById('baterista').textContent = selections['baterista'] || 'Escolha o participante';
    document.getElementById('guitarrista').textContent = selections['guitarrista'] || 'Escolha o participante';
    document.getElementById('violonista').textContent = selections['violonista'] || 'Escolha o participante';
    document.getElementById('tecladista').textContent = selections['tecladista'] || 'Escolha o participante';
    document.getElementById('liderVocal').textContent = selections['vocalista'] || 'NEscolha o participante';
    document.getElementById('vocalista1').textContent = selections['vocalista1'] || 'Escolha o participante';
    document.getElementById('vocalista2').textContent = selections['vocalista2'] || 'Escolha o participante';
    document.getElementById('vocalista3').textContent = selections['vocalista3'] || 'Escolha o participante';
    document.getElementById('vocalista4').textContent = selections['vocalista4'] || 'Escolha o participante';
}

// Carregar seleções ao carregar a página
document.addEventListener('DOMContentLoaded', (event) => {
    loadSelections();
});
