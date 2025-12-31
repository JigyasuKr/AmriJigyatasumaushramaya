document.addEventListener('click', function() {
    const music = document.getElementById('gallery-music');
    music.play();
}, { once: true });

const carousel = document.getElementById('carousel');

// Pause rotation on hover
carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
});