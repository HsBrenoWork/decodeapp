document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card-container .card');
    cards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 2;

        // Trigger flip when the card reaches a certain point in the viewport
        if (cardPosition < screenPosition) {
            card.classList.add('flipped');
        }
    });
});