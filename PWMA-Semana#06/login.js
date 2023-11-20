// login.js

function openLoginModal() {
    const modal = document.getElementById('modal');
    const cadastroForm = document.getElementById('cadastro-form');
    const loginForm = document.getElementById('login-form');

    cadastroForm.style.display = 'none';
    loginForm.style.display = 'block';

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function fazerLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senhaLogin').value;

    if (usuario && senha) {
        alert('Login realizado com sucesso!');
        closeModal();

        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('username', usuario);

        if ( formtype == 'entrar') {
        console.log('Redirecionando para index.html');
        window.location.href= 'index.html';
        }
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}
