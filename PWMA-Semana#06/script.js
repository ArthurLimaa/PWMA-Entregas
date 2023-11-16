// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Verifica se há um nome de usuário armazenado (usuário logado)
    const storedUsername = localStorage.getItem('username');

    if (storedUsername) {
        // Usuário logado, esconde opções de login/cadastro
        document.querySelector('ul').style.display = 'none';

        // Adiciona o nome do usuário no cabeçalho
        const header = document.querySelector('header');
        const usernameElement = document.createElement('h4');
        usernameElement.textContent = `Olá, ${storedUsername}!`;
        header.appendChild(usernameElement);
    }
});

let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
    const button = document.querySelector('button');
    button.textContent = isDarkMode ? 'Light' : 'Dark';
}

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'lightgray';
    });

    link.addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
    });
});

function openModal(formType) {
    const modal = document.getElementById('modal');
    const cadastroForm = document.getElementById('cadastro-form');
    const loginForm = document.getElementById('login-form');

    if (formType === 'signup') {
        cadastroForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else if (formType === 'login') {
        cadastroForm.style.display = 'none';
        loginForm.style.display = 'block';
    }

    modal.style.display = 'block';

    // Redirecionamento movido para fora do if
    if (formType === 'signup') {
        window.location.href = 'cadastro.html'; // Redireciona para a página de cadastro
    } else if (formType === 'login') {
        window.location.href = 'login.html'; // Redireciona para a página de login
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
