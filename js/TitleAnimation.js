document.addEventListener('DOMContentLoaded', (event) => {
    const spans = document.querySelectorAll('.word span');
    const aboutLink = document.getElementById('about-link');

    // Fonction pour ajouter l'effet initial
    function addInitialEffect() {
        spans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, 750 * (idx + 1));
        });
    }

    // Ajout de l'événement click pour l'animation à la demande
    spans.forEach((span) => {
        span.addEventListener('click', (e) => {
            e.target.classList.add('active');
        });

        span.addEventListener('animationend', (e) => {
            e.target.classList.remove('active');
        });
    });

    // Ajout de l'écouteur d'événement sur le lien de navigation "À propos"
    aboutLink.addEventListener('click', (e) => {
        // Utiliser setTimeout pour attendre que le défilement vers la section soit terminé
        setTimeout(() => {
            addInitialEffect();
        }, 500); // Ajuster le délai si nécessaire
    });
});
