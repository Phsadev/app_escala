// Função para carregar seleções do Local Storage
function loadSelections() {
    let selections = JSON.parse(localStorage.getItem('selections')) || {};

    document.getElementById('baixista').textContent = selections['baixista'] || 'Nenhum baixista selecionado';
    document.getElementById('baterista').textContent = selections['baterista'] || 'Nenhum baterista selecionado';
    document.getElementById('guitarrista').textContent = selections['guitarrista'] || 'Nenhum guitarrista selecionado';
    document.getElementById('violonista').textContent = selections['violonista'] || 'Nenhum violonista selecionado';
    document.getElementById('tecladista').textContent = selections['tecladista'] || 'Nenhum tecladista selecionado';
    document.getElementById('liderVocal').textContent = selections['liderVocal'] || 'Nenhum líder vocal selecionado';
    document.getElementById('vocalista1').textContent = selections['vocalista1'] || 'Nenhum vocalista selecionado';
    document.getElementById('vocalista2').textContent = selections['vocalista2'] || 'Nenhum vocalista selecionado';
    document.getElementById('vocalista3').textContent = selections['vocalista3'] || 'Nenhum vocalista selecionado';
    document.getElementById('vocalista4').textContent = selections['vocalista4'] || 'Nenhum vocalista selecionado';
}

// Carregar seleções ao carregar a página
document.addEventListener('DOMContentLoaded', (event) => {
    loadSelections();
});
