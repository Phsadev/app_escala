document.addEventListener('DOMContentLoaded', function() {
    // Função para inicializar dados de administrador no Local Storage
    function initializeAdmin() {
        const adminUser = {
            username: 'admin',
            password: 'admin123'
        };
        localStorage.setItem('admin', JSON.stringify(adminUser));
    }

    // Verifica se já existe o usuário admin no Local Storage
    if (!localStorage.getItem('admin')) {
        initializeAdmin();
    }

    // Função para fazer login
    function login(event) {
        event.preventDefault();
        
        const username = document.querySelector('input[name="uname"]').value;
        const password = document.querySelector('input[name="psw"]').value;
        
        const adminUser = JSON.parse(localStorage.getItem('admin'));

        if (username === adminUser.username && password === adminUser.password) {
            // Sucesso no login
            window.location.href = "/Agendamento/apresentation/apresentation.html";
        } else {
            alert('Nome de usuário ou senha incorretos');
        }
    }

    // Adiciona evento de submit ao formulário de login
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', login);
});

