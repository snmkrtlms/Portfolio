window.addEventListener('load', function() {
    // Temporisation pour prolonger la visibilité de l'animation
    setTimeout(function() {
        // Cacher l'animation de chargement
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        
        // Afficher le contenu principal de la page
        var content = document.getElementById('content');
        content.style.display = 'block';

        // Ajouter la classe d'animation au texte
        var text = document.getElementById('text');
        text.classList.add('show-text');

        var splitText = text.innerText.split('');
        text.innerHTML = '';
        var i = 0;
        var interval = setInterval(function() {
            if (i < splitText.length) {
                text.innerHTML += splitText[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 120);

        var homeSection = document.getElementById('home');
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    let skillsLink = document.querySelector('a[href="#skills"]');
    skillsLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        let skillsSection = document.getElementById('skills');
        let offset = skillsSection.offsetTop + (skillsSection.offsetHeight / 2) - (window.innerHeight / 2);
        scrollTo(offset); 
    });

    function scrollTo(position) {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    let scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let socialIcons = document.getElementById('social-icons');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            socialIcons.style.display = 'flex';
        } else {
            socialIcons.style.display = 'none';
        }
    });

    socialIcons.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function afficherVideo(urlVideo) {
    var popupContainer = document.getElementById('popup-container');
    var popupContent = document.getElementById('popup-content');

    // Afficher la pop-up
    popupContainer.style.display = 'block';

    // Contenu de la vidéo
    popupContent.innerHTML = '<video controls><source src="' + urlVideo + '" type="video/mp4"></video>';

    // Ajouter le bouton de fermeture
    var closeButton = document.createElement('button');
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeButton.onclick = fermerPopup;
    popupContent.appendChild(closeButton);
}

function fermerPopup() {
    var popupContainer = document.getElementById('popup-container');

    // Masquer la pop-up
    popupContainer.style.display = 'none';

    // Effacer le contenu de la pop-up
    var popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = '';
}
