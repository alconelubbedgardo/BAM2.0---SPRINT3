// Selecciona los elementos de las diapositivas y los puntos
let slides = document.querySelectorAll('.slides');
let dots = document.querySelectorAll('.dots');

// Inicializa las posiciones
let currentPos = 0;
let pos = 0;

// Selecciona las diapositivas en el contenedor con ID "gallery-slides"
let gallerySlides = document.getElementById("gallery-slides");

// Se define la velocidad de presentación automática de las diapositivas
const VELOCIDAD = 2000;

// Funciones para mover las diapositivas a la izquierda y a la derecha
function directLeft_click() {
    pos = pos === 0 ? slides.length - 1 : pos - 1;
    dot_click(pos);
}

function directRight_click() {
    pos = pos === slides.length - 1 ? 0 : pos + 1;
    dot_click(pos);
}

// Función para mover las diapositivas cuando se hace click en las flechas de desplazamiento
function dot_click(slideIndex) {

    // Recorre todos los elementos "dot" y les asigna la clase "dots"
    dots.forEach(dot => dot.setAttribute("class", "dots"));
    
    // Asigna la clase "dots active" al punto que corresponde al índice de la diapositiva actual
    dots[slideIndex].setAttribute("class", "dots active");

    // Si el índice de la diapositiva es 0 (la primera diapositiva)
    if (slideIndex === 0) {
        // Si la posición actual es 3 (la última diapositiva)
        if (currentPos === 3)   
            // Aplica una animación para deslizar a la primera diapositiva desde la última
            gallerySlides.style.animation = `slideR0 1s ease 0s 1 normal forwards`;
        // Si la posición actual es 1 (la segunda diapositiva)
        if (currentPos === 1)  
            // Aplica una animación para deslizar a la primera diapositiva desde la segunda
            gallerySlides.style.animation = `slide1 0.7s ease 0s 1 normal forwards`;
    } else {
        // Si la posición actual es menor que el índice de la diapositiva (deslizar a la izquierda)
        if (currentPos < slideIndex) {    
            // Si la posición actual es 0 (la primera diapositiva) y el índice de la diapositiva es 3 (la última diapositiva)
            if(currentPos === 0 && slideIndex===3)
                // Aplica una animación para deslizar a la última diapositiva desde la primera
                gallerySlides.style.animation = `slideL${currentPos} 0.7s ease 0s 1 normal forwards`;
            else
                // Aplica una animación para deslizar a la diapositiva del índice desde la posición actual
                gallerySlides.style.animation = `slideL${slideIndex} 0.7s ease 0s 1 normal forwards`;
        }
        // Si la posición actual es mayor que el índice de la diapositiva (deslizar a la derecha)
        if (currentPos > slideIndex) {      
            // Aplica una animación para deslizar a la diapositiva del índice desde la posición actual
            gallerySlides.style.animation = `slideR${slideIndex} 0.7s ease 0s 1 normal forwards`;
        }
    } 

    // Imprime en la consola las posiciones actual y objetivo para fines de depuración
    console.log("currentPos:", currentPos);
    console.log("slideIndex:", slideIndex);
    
    // Actualiza la posición actual a la posición objetivo
    currentPos = slideIndex;
}

// Inicia la presentación de diapositivas
setInterval(directRight_click, VELOCIDAD);