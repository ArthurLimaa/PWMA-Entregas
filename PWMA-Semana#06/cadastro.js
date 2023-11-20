// cadastro.js

function openCadastroModal() {
    const modal = document.getElementById('modal');
    const cadastroForm = document.getElementById('cadastro-form');
    const loginForm = document.getElementById('login-form');

    cadastroForm.style.display = 'block';
    loginForm.style.display = 'none';

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function cadastrar() {
    const nome = document.getElementById('nome').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (nome && username && email && senha && senha === confirmarSenha) {
        alert('Cadastro realizado com sucesso!');
        closeModal();

        
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('username', username);

        window.location.href = 'index.html';
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}
