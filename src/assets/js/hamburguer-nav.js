document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Verifica se os elementos existem antes de adicionar o listener
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            // Alterna a classe 'hidden' no menu mobile
            mobileMenu.classList.toggle('hidden');
        });

        // Adição: Fecha o menu mobile ao clicar em um link (melhor UX)
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
