var i = 4;
function adicionarParticipante() {
    var ul = document.getElementById("listaParticipantes");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Participante " + i));
    ul.appendChild(li);
    i++;
}

function removerParticipante() {
    var ul = document.getElementById("listaParticipantes");
    var lastLi = ul.querySelector('li:last-child');
    if (lastLi) {
        ul.removeChild(lastLi);
        i--;
    }
}