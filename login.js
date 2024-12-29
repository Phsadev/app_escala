document.querySelector('#loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#uname').value;
    const password = document.querySelector('#psw').value;

    if (gerenciamentoUsuarios.validarUsuario(username, password)) {
        window.location.href = '../Agendamento/apresentation/apresentation.html';
    } else {
        alert('Login falhou, por favor, tente novamente.');
    }
});
