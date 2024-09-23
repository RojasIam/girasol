let currentIndex = 0;

// Para almacenar los audios
let currentAudio = null;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Asegurarse de que el índice esté dentro de los límites
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Mover el carrusel a la posición correcta
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Detener el audio anterior y reproducir el nuevo
    if (currentAudio) {
        currentAudio.pause(); // Detener el audio anterior
    }

    // Obtener el nuevo audio y reproducirlo
    const newAudio = slides[currentIndex].querySelector('audio');
    if (newAudio) {
        currentAudio = newAudio; // Actualizar el audio actual
        currentAudio.play(); // Reproducir el nuevo audio
    }
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Iniciar el carrusel
showSlide(currentIndex);
