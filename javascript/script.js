// Animação ao rolar a página
gsap.from("#hero h1", { opacity: 0, y: -50, duration: 1.5, delay: 0.5 });
gsap.from("#hero p", { opacity: 0, y: 50, duration: 1.5, delay: 1 });
gsap.from("#hero .btn", { opacity: 0, y: 50, duration: 1.5, delay: 1.5 });

// Animação ao clicar no menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});