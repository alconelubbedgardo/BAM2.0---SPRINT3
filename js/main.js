// Selecciona los elementos que contienen el texto
var titulo = document.getElementById('titulo');
var descripcion = document.getElementById('descripcion');

// Selecciona los elementos del cursor
var cursorTitulo = document.getElementById('cursorTitulo');
var cursorDescripcion = document.getElementById('cursorDescripcion');

// Los textos que quieres mostrar
var contenidoTitulo = '¡Bienvenido!';
var contenidoDescripcion = 'Soy Edgardo Nicolás, analista de datos, desarrollador web y de videojuegos. Estoy certificado en las primeras dos especialidades por el Infomatorio de la Subsecretaría de Empleo de la Provincia del Chaco, autodidacta en la tercera especialidad. Y actualmente cursando diseño web en el Programa BA Multiplica \n\n Me apasiona crear soluciones innovadoras y atractivas para todo tipo de clientes y necesidades. Tengo experiencia en el uso de herramientas como HTML, CSS, JavaScript, Python, y el motor de desarrollo Godot. \n\nMi objetivo es ayudarte a alcanzar tus metas y satisfacer tus expectativas con mi trabajo. Me gusta aprender cosas nuevas y estar al día con las últimas tendencias y tecnologías. Me considero una persona responsable, creativa y comprometida con la calidad. \n\nEstoy disponible para trabajar en proyectos a corto o largo plazo, tanto de forma presencial como remota. Puedes contactarme a través de alguna de las vías de comunicacón disponibles al pie de la pagina\n\nEspero tener la oportunidad de trabajar contigo y hacer realidad tus ideas.  \n\n ¡Gracias por visitar mi web! ';

// Inicializa índices para llevar la cuenta de los caracteres
var indiceTitulo = 0;
var indiceDescripcion = 0;

// Velocidad de escritura (5 milisegundos por carácter)
var velocidad = 5;

// Oculta el cursor de la descripción hasta que empiece a escribirse la descripción
cursorDescripcion.style.display = 'none';

// Función para mostrar un carácter del texto cada vez
function escribirTexto(elemento, cursor, contenido, indice, siguienteElemento, siguienteCursor, siguienteContenido, siguienteIndice) {
    // Si aún quedan caracteres por mostrar
    if (indice < contenido.length) {
        // Muestra el cursor
        cursor.style.display = 'inline-block';
        // Verifica si el carácter actual es un salto de línea
        if (contenido[indice] === '\n' && contenido[indice + 1] === '\n') {
            // Si son dos saltos de línea, añade dos '<br>' al texto del elemento
            elemento.innerHTML += '<br><br>';
            // Incrementa el índice extra para saltar el segundo '\n'
            indice++;
        } else if (contenido[indice] !== '\n') {
            // Si no es un salto de línea, añade el carácter al texto del elemento
            elemento.innerHTML += contenido[indice];
        } else {
            // Si es un solo salto de línea, añade un '<br>' al texto del elemento
            elemento.innerHTML += '<br>';
        }
        // Mueve el cursor al final del texto
        elemento.innerHTML = elemento.innerHTML.replace(cursor.outerHTML, '') + cursor.outerHTML;
        // Incrementa el índice
        indice++;
        // Espera un poco antes de mostrar el siguiente carácter
        setTimeout(function() {
            escribirTexto(elemento, cursor, contenido, indice, siguienteElemento, siguienteCursor, siguienteContenido, siguienteIndice);
        }, velocidad);
    } else {
        // Si hay un siguiente elemento y contenido, empieza a escribirlo
        if (siguienteElemento && siguienteContenido) {
            // Oculta el cursor actual
            cursor.style.display = 'none';
            // Muestra el cursor del siguiente elemento
            siguienteCursor.style.display = 'inline-block';
            escribirTexto(siguienteElemento, siguienteCursor, siguienteContenido, siguienteIndice);
        } else {
            // Si no hay un siguiente elemento, deja el cursor visible
            cursor.style.display = 'none';
        }
    }
}

// Llama a la función para empezar la animación del título
escribirTexto(titulo, cursorTitulo, contenidoTitulo, indiceTitulo, descripcion, cursorDescripcion, contenidoDescripcion, indiceDescripcion);
