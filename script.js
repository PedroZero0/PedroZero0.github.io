document.addEventListener('DOMContentLoaded', () => {
    showHearts();
});

function revealMessage() {
    const specialMessage = document.getElementById('special-message');
    const message = "Você faz meu mundo mais brilhante. Cada momento com você é um presente. Te amo eternamente!";
    
    specialMessage.classList.remove('hidden');
    specialMessage.classList.add('typing');
    specialMessage.innerHTML = message;
}

function showHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}