// Script para alternar entre o modo claro e escuro
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    this.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
});

// Script para mudar a cor do menu de navegação ao passar o mouse
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#FFD700'; // Cor dourada
    });
    
    link.addEventListener('mouseout', () => {
        link.style.color = '#FFF'; // Cor branca
    });
});