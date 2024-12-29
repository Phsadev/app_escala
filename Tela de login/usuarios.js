

document.addEventListener('DOMContentLoaded', (event) => {
    var users = JSON.parse(localStorage.getItem('users')) || {};

    // Adicione o usuário administrador manualmente
    if (!users['admin']) {
        users['admin'] = 'senha';
        localStorage.setItem('users', JSON.stringify(users));
    }
});

function login() {
    var username = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;

    var users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username] && users[username] === password) {
        window.location.href = '../Agendamento/apresentation/apresentation.html';
    } else {
        alert('Usuário ou senha inválidos');
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    login(); // Chama a função de login
});
