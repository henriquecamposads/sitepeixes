// Página de Login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            
            // Armazena o nome do usuário no localStorage
            localStorage.setItem('username', username);
            
            // Redireciona para a página de curiosidades
            window.location.href = 'curiosidades.html';
        });
    }
    
    // Página de Curiosidades
    const welcomeMessage = document.getElementById('welcome-message');
    const changeFishBtn = document.getElementById('changeFishBtn');
    const colorfulFish = document.getElementById('colorfulFish');
    
    if (welcomeMessage) {
        // Recupera o nome do usuário do localStorage
        const username = localStorage.getItem('username') || 'Visitante';
        welcomeMessage.textContent = `Olá, ${username}!`;
    }
    
    if (changeFishBtn && colorfulFish) {
        const fishEmojis = ['🐠', '🐟', '🐡', '🦈', '🐋', '🐙', '🦑', '🦐', '🦞', '🦀'];
        
        changeFishBtn.addEventListener('click', function() {
            // Seleciona um peixe aleatório
            const randomFish = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];
            colorfulFish.textContent = randomFish;
            
            // Adiciona animação
            colorfulFish.style.transform = 'scale(1.2) rotate(10deg)';
            
            // Remove a animação após 0.5s
            setTimeout(() => {
                colorful