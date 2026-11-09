const preguntas = [
    {
        pregunta: "¿Cuál lenguaje se usa para dar estructura y contenido básico a una página web?",
        opciones: ["CSS", "HTML", "SQL"],
        correcta: 1 
    },
    {
        pregunta: "¿Qué lenguaje se utiliza principalmente para dar colores, diseños y estilos visuales?",
        opciones: ["JavaScript", "HTML", "CSS"],
        correcta: 2 
    },
    {
        pregunta: "¿Cuál de estos lenguajes permite dar interactividad, animaciones y lógica a un sitio web?",
        opciones: ["JavaScript", "SQL", "Jinja"],
        correcta: 0 
    },
    {
        pregunta: "¿Qué lenguaje está diseñado específicamente para consultar y administrar bases de datos?",
        opciones: ["CSS", "SQL", "HTML"],
        correcta: 1 
    },
    {
        pregunta: "¿Qué extensión de archivo se usa comúnmente para guardar páginas principales en HTML?",
        opciones: [".html", ".css", ".js"],
        correcta: 0 
    },
    {
        pregunta: "¿Cuál lenguaje se emplea junto a Python como un motor de plantillas para la web?",
        opciones: ["SQL", "Jinja", "CSS"],
        correcta: 1 
    },
    {
        pregunta: "¿Qué etiqueta o lenguaje se encarga de los estilos en cascada?",
        opciones: ["HTML", "CSS", "JavaScript"],
        correcta: 1 
    },
    {
        pregunta: "¿Para qué sirve principalmente una base de datos con SQL?",
        opciones: ["Guardar información y registros", "Crear botones animados", "Dibujar imágenes"],
        correcta: 0 
    },
    {
        pregunta: "¿Cuál de los siguientes es considerado un lenguaje de programación web del lado del cliente?",
        opciones: ["SQL", "JavaScript", "Jinja"],
        correcta: 1 
    },
    {
        pregunta: "¿Qué tecnología usarías si quieres crear una tabla de datos interactiva que responda a clics?",
        opciones: ["HTML estático", "JavaScript", "Solo CSS"],
        correcta: 1 
    }
];

let indiceActual = 0;
let puntaje = 0;

function cargarPregunta() {
    const q = preguntas[indiceActual];
    document.getElementById("numPregunta").innerText = `Pregunta ${indiceActual + 1}/10`;
    document.getElementById("txtPregunta").innerText = q.pregunta;
    document.getElementById("resultadoJuego").innerText = "";

    const contenedor = document.getElementById("contenedorOpciones");
    contenedor.innerHTML = "";

    q.opciones.forEach((opcion, index) => {
        const btn = document.createElement("button");
        btn.innerText = opcion;
        btn.onclick = () => verificar(index === q.correcta);
        contenedor.appendChild(btn);
    });
}

function verificar(esCorrecta) {
    const res = document.getElementById("resultadoJuego");
    const botones = document.getElementById("contenedorOpciones").getElementsByTagName("button");

    for (let b of botones) {
        b.disabled = true;
    }

    if (esCorrecta) {
        res.style.color = "#2a9d8f";
        res.innerText = "¡Correcto! 🎉 Siguiente...";
        puntaje++;
    } else {
        res.style.color = "#e63946";
        res.innerText = "Incorrecto ❌ Siguiente...";
    }

    setTimeout(() => {
        indiceActual++;
        if (indiceActual < preguntas.length) {
            cargarPregunta();
        } else {
            mostrarResultadoFinal();
        }
    }, 1100);
}

function mostrarResultadoFinal() {
    document.getElementById("numPregunta").innerText = "¡Juego Completado! 🏆";
    document.getElementById("txtPregunta").innerText = `Terminaste las 10 preguntas. Tu puntaje fue: ${puntaje}/10.`;
    document.getElementById("contenedorOpciones").innerHTML = `
        <button onclick="reiniciarJuego()" style="background: #2a9d8f; padding: 10px; font-size: 1rem;">🔄 Volver a Jugar</button>
    `;
    document.getElementById("resultadoJuego").innerText = "";
}

function reiniciarJuego() {
    indiceActual = 0;
    puntaje = 0;
    cargarPregunta();
}


function abrirPuertas() {
    const puertaIzquierda = document.getElementById('puertaIzquierda');
    const puertaDerecha = document.getElementById('puertaDerecha');
    
    if (puertaIzquierda && puertaDerecha) {
        puertaIzquierda.classList.add('abrir-izquierda'); // O la clase CSS que uses para ocultarlas
        puertaDerecha.classList.add('abrir-derecha');
        
        // O si usas estilo directo:
        puertaIzquierda.style.transform = "rotateY(-180deg)";
        puertaDerecha.style.transform = "rotateY(180deg)";
        puertaIzquierda.style.pointerEvents = "none";
        puertaDerecha.style.pointerEvents = "none";
    }
}


function cerrarPuertas() {
    document.getElementById("puertaIzquierda").classList.remove("puerta-abierta-izq");
    document.getElementById("puertaDerecha").classList.remove("puerta-abierta-der");
}

window.onload = function() {
    cargarPregunta();
};

// Función segura para el acordeón de HTML
function toggleAcordeon() {
    const card = document.getElementById("cardHtml");
    card.classList.toggle("abierto");
}
function toggleCascada() {
    const card = document.getElementById("cardHtml");
    card.classList.toggle("abierto");

}
function toggleHolograma() {
    const card = document.getElementById('cardHtml');
    card.classList.toggle('holograma-activo');
}

function toggleHolograma() {
    const card = document.getElementById('cardHtml');
    card.classList.toggle('holograma-activo');
}

// Minijuego: Ensamblaje HTML
function verificarHtml(etiqueta) {
    const resultado = document.getElementById('htmlResultado');
    if (etiqueta === '&lt;h1&gt;') {
        resultado.style.color = "#00f5d4";
        resultado.innerHTML = "🎉 ¡Correcto! Has creado un título web.";
    } else {
        resultado.style.color = "#ff0054";
        resultado.innerHTML = "❌ Casi, esa pertenece a otra función. ¡Intenta de nuevo!";
    }
}

// Abrir/Cerrar SQL
function toggleSql() {
    document.getElementById('cardSql').classList.toggle('abierto');
}
function ejecutarQuery() {
    const res = document.getElementById('sqlResult');
    res.innerHTML = "✔ 3 filas encontradas:<br>• Base de datos SQL<br>• Consultas SELECT<br>• Tablas y Registros";
}

// Abrir/Cerrar Jinja
function toggleJinja() {
    document.getElementById('cardJinja').classList.toggle('abierto');
}

// Abrir/Cerrar CSS
function toggleCss() {
    document.getElementById('cardCss').classList.toggle('abierto');
}
function cambiarColorCss(color) {
    const card = document.getElementById('cardCss');
    card.style.borderColor = color;
    card.style.boxShadow = `0 0 20px ${color}`;
}

// Abrir/Cerrar JS
function toggleJs() {
    document.getElementById('cardJs').classList.toggle('abierto');
}
function lanzarPropulsion() {
    const status = document.getElementById('jsStatus');
    const btn = document.getElementById('btnLaunch');
    status.innerText = "🚀 ¡PROPULSIÓN ACTIVADA!";
    status.style.color = "#00f5d4";
    btn.style.background = "#00f5d4";
}

// Funciones independientes para alternar la apertura de cada tarjeta
function toggleCascada() { document.getElementById('cardHtml').classList.toggle('abierto'); }
function toggleSql()     { document.getElementById('cardSql').classList.toggle('abierto'); }
function toggleJinja()   { document.getElementById('cardJinja').classList.toggle('abierto'); }
function toggleCss()     { document.getElementById('cardCss').classList.toggle('abierto'); }
function toggleJs()      { document.getElementById('cardJs').classList.toggle('abierto'); }

// ================= FUNCIONES LIMPIAS PARA LA TARJETA DE CSS =================

// Función para abrir/cerrar la tarjeta de CSS de forma independiente
function toggleCssCard() {
    const contenido = document.getElementById('contentCss');
    if (contenido) {
        if (contenido.style.display === "block") {
            contenido.style.display = "none";
        } else {
            contenido.style.display = "block";
        }
    }
}

// Función exclusiva para cambiar el color de la tarjeta de CSS en tiempo real
function cambiarColorCss(colorHex) {
    const tarjetaCss = document.getElementById('cardCss');
    if (tarjetaCss) {
        tarjetaCss.style.borderColor = colorHex;
        tarjetaCss.style.boxShadow = `0 0 25px ${colorHex}`;
    }
}
// Minijuego: Ensambla la Etiqueta (HTML)
function verificarHtml(etiqueta) {
    const resultado = document.getElementById('htmlResultado');
    if (etiqueta === '&lt;h1&gt;') {
        resultado.style.color = "#00f5d4";
        resultado.innerHTML = "🎉 ¡Correcto! Has creado un título web.";
    } else {
        resultado.style.color = "#ff0054";
        resultado.innerHTML = "❌ Casi, esa pertenece a otra función. ¡Intenta de nuevo!";
    }
}
// Abrir / Cerrar tarjeta HTML (Cascada)
function toggleCascada() {
    const content = document.getElementById('contentCascada');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// Lógica del juego dinámico HTML por niveles
let nivelHtml = 1;
function jugarHtml(opcion) {
    const resultado = document.getElementById('htmlResultado');
    const desafio = document.getElementById('htmlDesafio');

    if (nivelHtml === 1) {
        if (opcion === 'h1') {
            resultado.style.color = "#00f5d4";
            resultado.innerHTML = "🎉 ¡Excelente! &lt;h1&gt; define el título principal.";
            nivelHtml = 2;
            setTimeout(() => {
                desafio.innerHTML = "Nivel 2: ¿Qué etiqueta inserta una <b>imagen</b>?";
                resultado.innerHTML = "¡Siguiente nivel!";
                resultado.style.color = "#00f5d4";
            }, 1200);
        } else {
            resultado.style.color = "#ff0054";
            resultado.innerHTML = "❌ Nop, esa no es para títulos principales.";
        }
    } else if (nivelHtml === 2) {
        if (opcion === 'img') {
            resultado.style.color = "#00f5d4";
            resultado.innerHTML = "🏆 ¡Brillante! &lt;img&gt; inserta imágenes. ¡Juego superado!";
            nivelHtml = 1;
            setTimeout(() => {
                desafio.innerHTML = "Nivel 1: ¿Qué etiqueta define el <b>título principal</b>?";
            }, 2500);
        } else {
            resultado.style.color = "#ff0054";
            resultado.innerHTML = "❌ ¡Inténtalo de nuevo para colocar la imagen!";
        }
    }
}
function lanzarPropulsion() {
    const status = document.getElementById('jsStatus');
    const cohete = document.getElementById('coheteVolador');
    
    // Cambiar estado visual del texto
    status.innerHTML = "Estado: 🚀 ¡Propulsión Activada!";
    status.style.color = "#00f5d4";

    // Reiniciar posición del cohete abajo
    cohete.style.transition = "none";
    cohete.style.bottom = "-150px";
    
    // Disparar animación hacia arriba de la pantalla
    setTimeout(() => {
        cohete.style.transition = "bottom 1.8s ease-in-out";
        cohete.style.bottom = "110vh"; // Cruza toda la pantalla hacia arriba
    }, 50);

    // Regresar el estado a la normalidad después de la animación
    setTimeout(() => {
        status.innerHTML = "Estado: Standby";
        status.style.color = "#ffb703";
    }, 2000);
}
// Abrir / Cerrar Terminal SQL
function toggleSql() {
    const content = document.getElementById('contentSql');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// Lógica del minijuego SQL por niveles
let nivelSql = 1;
function jugarSql(opcion) {
    const resultado = document.getElementById('sqlResultado');
    const desafio = document.getElementById('sqlDesafio');

    if (nivelSql === 1) {
        if (opcion === 'select') {
            resultado.style.color = "#00f5d4";
            resultado.innerHTML = "🎉 ¡Perfecto! SELECT extrae los datos.";
            nivelSql = 2;
            setTimeout(() => {
                desafio.innerHTML = "Nivel 2: ¿Qué comando añade un <b>nuevo registro</b>?";
                resultado.innerHTML = "¡Siguiente nivel!";
            }, 1200);
        } else {
            resultado.style.color = "#ff0054";
            resultado.innerHTML = "❌ Nop, ese comando sirve para otra cosa en la BD.";
        }
    } else if (nivelSql === 2) {
        if (opcion === 'insert') {
            resultado.style.color = "#00f5d4";
            resultado.innerHTML = "🏆 ¡Excelente! INSERT INTO agrega registros. ¡Superado!";
            nivelSql = 1;
            setTimeout(() => {
                desafio.innerHTML = "Nivel 1: ¿Qué comando se usa para <b>leer o extraer</b> registros?";
            }, 2500);
        } else {
            resultado.style.color = "#ff0054";
            resultado.innerHTML = "❌ ¡Inténtalo de nuevo para insertar datos!";
        }
    }
}
// --- INTERACTIVIDAD HTML (Constructor en Vivo) ---
function agregarElementoHtml(tipo) {
    const canvas = document.getElementById('htmlCanvas');
    if (tipo === 'reset') {
        canvas.innerHTML = '<small style="color: #aaa;">El contenido creado aparecerá aquí...</small>';
        return;
    }
    
    // Si estaba el placeholder, lo limpiamos
    if (canvas.querySelector('small')) {
        canvas.innerHTML = '';
    }

    if (tipo === 'h1') {
        canvas.innerHTML += '<h3 style="color: #ff0054; margin: 4px 0;">⚡ Nuevo Título H1</h3>';
    } else if (tipo === 'p') {
        canvas.innerHTML += '<p style="color: #fff; font-size: 12px; margin: 4px 0;">Este es un párrafo de texto en vivo.</p>';
    } else if (tipo === 'btn') {
        canvas.innerHTML += '<button style="background: #ffb703; border: none; padding: 4px 8px; border-radius: 4px; font-weight: bold; margin: 2px;">¡Botón HTML!</button>';
    }
}

// --- INTERACTIVIDAD SQL (Gestor de Tabla) ---
let idCount = 3;
function ejecutarSqlReal(accion) {
    const log = document.getElementById('sqlLog');
    const tbody = document.getElementById('sqlTableBody');

    if (accion === 'SELECT') {
        log.innerHTML = 'Query: <span style="color:#00f5d4;">SELECT * FROM usuarios;</span> (Filas devueltas)';
    } else if (accion === 'INSERT') {
        log.innerHTML = `Query: <span style="color:#ff0054;">INSERT INTO usuarios VALUES (${idCount}, 'User_${idCount}', 'Guest');</span>`;
        tbody.innerHTML += `<tr><td>${idCount}</td><td>User_${idCount}</td><td>Guest</td></tr>`;
        idCount++;
    } else if (accion === 'DELETE') {
        log.innerHTML = 'Query: <span style="color:#ffb703;">DELETE FROM usuarios WHERE id = ultimo;</span>';
        if (tbody.lastElementChild) {
            tbody.removeChild(tbody.lastElementChild);
        }
    }
}

// --- COHETE VOLADOR ---
function lanzarPropulsion() {
    const cohete = document.getElementById('coheteVolador');
    const status = document.getElementById('jsStatus');
    if (cohete) {
        cohete.style.bottom = '105vh';
        status.innerHTML = "Estado: 🚀 ¡Propulsión Activada!";
        setTimeout(() => {
            cohete.style.transition = 'none';
            cohete.style.bottom = '-150px';
            setTimeout(() => {
                cohete.style.transition = 'bottom 1.5s ease-in-out';
            }, 50);
            status.innerHTML = "Estado: Standby";
        }, 1600);
    }
}

// --- TOGGLES DE LAS TARJETAS ---
function toggleCascada() {
    const el = document.getElementById('contentCascada');
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
}

function toggleSql() {
    const el = document.getElementById('contentSql');
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
}

function toggleJinja() {
    const el = document.getElementById('contentJinja');
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
}

function toggleCssCard() {
    const el = document.getElementById('contentCss');
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
}

function toggleJs() {
    const el = document.getElementById('contentJs');
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
}

// --- INTERACTIVIDAD HTML ---
function agregarElementoHtml(tipo) {
    const canvas = document.getElementById('htmlCanvas');
    if (tipo === 'reset') {
        canvas.innerHTML = '<small style="color: #aaa;">El contenido creado aparecerá aquí...</small>';
        return;
    }
    if (canvas.querySelector('small')) {
        canvas.innerHTML = '';
    }
    if (tipo === 'h1') {
        canvas.innerHTML += '<h3 style="color: #ff0054; margin: 4px 0;">⚡ Nuevo Título H1</h3>';
    } else if (tipo === 'p') {
        canvas.innerHTML += '<p style="color: #fff; font-size: 11px; margin: 4px 0;">Párrafo insertado en el DOM.</p>';
    } else if (tipo === 'btn') {
        canvas.innerHTML += '<button style="background: #ffb703; border: none; padding: 3px 6px; border-radius: 3px; font-weight: bold; font-size: 10px;">¡Botón DOM!</button>';
    }
}

// --- TERMINAL SQL ---
function ejecutarSqlTerminal(query) {
    const pantalla = document.getElementById('sqlTerminalScreen');
    if (query === 'select') {
        pantalla.innerHTML = "> SELECT * FROM registros;<br><span style='color: #00f5d4;'>[OK] 3 filas recuperadas con éxito.</span>";
    } else if (query === 'insert') {
        pantalla.innerHTML = "> INSERT INTO registros VALUES ('Nuevo');<br><span style='color: #ffb703;'>[OK] Registro añadido correctamente.</span>";
    } else if (query === 'drop') {
        pantalla.innerHTML = "> DROP TABLE registros;<br><span style='color: #ff0054;'>[¡ALERTA!] Tabla vaciada y reiniciada.</span>";
    }
}

// --- RENDER JINJA EN VIVO ---
function renderJinjaLive(nombre, rango) {
    const output = document.getElementById('jinjaLiveOutput');
    if (output) {
        output.innerHTML = `<h3>Hola ${nombre}!</h3><small>Rango: ${rango}</small>`;
    }
}

// --- CAMBIAR COLOR CSS ---
function cambiarColorCss(color) {
    const card = document.getElementById('cardCss');
    if (card) {
        card.style.borderColor = color;
    }
}
// --- CAMBIAR COLOR CSS GLOBAL (Aplica a todas las tarjetas + Luz intensa) ---
function cambiarColorCss(color) {
    // Seleccionamos todas las tarjetas interiores y el panel de preguntas central
    const tarjetas = document.querySelectorAll('.tarjeta-interior, .panel-central, [id^="card"]');
    
    tarjetas.forEach(card => {
        card.style.borderColor = color;
        // Agregamos un brillo/sombra de luz más intenso (glow effect)
        card.style.boxShadow = `0 0 18px ${color}, inset 0 0 10px ${color}`;
    });
}
function toggleCascada() {
    const el = document.getElementById('contentCascada');
    const card = document.getElementById('cardHtml');
    const isOpen = el.style.display === 'block';
    el.style.display = isOpen ? 'none' : 'block';
    card.classList.toggle('activa', !isOpen);
}

function toggleSql() {
    const el = document.getElementById('contentSql');
    const card = document.getElementById('cardSql');
    const isOpen = el.style.display === 'block';
    el.style.display = isOpen ? 'none' : 'block';
    card.classList.toggle('activa', !isOpen);
}

function toggleJinja() {
    const el = document.getElementById('contentJinja');
    const card = document.getElementById('cardJinja');
    const isOpen = el.style.display === 'block';
    el.style.display = isOpen ? 'none' : 'block';
    card.classList.toggle('activa', !isOpen);
}

function toggleCssCard() {
    const el = document.getElementById('contentCss');
    const card = document.getElementById('cardCss');
    const isOpen = el.style.display === 'block';
    el.style.display = isOpen ? 'none' : 'block';
    card.classList.toggle('activa', !isOpen);
}

function toggleJs() {
    const el = document.getElementById('contentJs');
    const card = document.getElementById('cardJs');
    const isOpen = el.style.display === 'block';
    el.style.display = isOpen ? 'none' : 'block';
    card.classList.toggle('activa', !isOpen);
}


function cambiarColorCss(color) {
    const elementos = document.querySelectorAll('.tarjeta-interior, .panel-central, [id^="card"]');
    elementos.forEach(el => {
        el.style.borderColor = color;
        el.style.boxShadow = `0 0 20px ${color}, inset 0 0 10px ${color}`;
    });
}
// --- TOGGLE SQL CON EFECTO MATRIX ---
function toggleSql() {
    const el = document.getElementById('contentSql');
    const card = document.getElementById('cardSql');
    const isOpen = el.style.display === 'block';
    
    el.style.display = isOpen ? 'none' : 'block';
    card.classList.toggle('activa', !isOpen);
    
    if (!isOpen) {
        el.classList.add('activa-efecto');
    } else {
        el.classList.remove('activa-efecto');
    }
}

// --- TOGGLE JINJA CON EFECTO SERVIDOR ---
function toggleJinja() {
    const el = document.getElementById('contentJinja');
    const card = document.getElementById('cardJinja');
    const isOpen = el.style.display === 'block';
    
    el.style.display = isOpen ? 'none' : 'block';
    card.classList.toggle('activa', !isOpen);
    
    if (!isOpen) {
        el.classList.add('activa-efecto');
    } else {
        el.classList.remove('activa-efecto');
    }
}
function cerrarPuertas() {
    const contenidos = document.querySelectorAll('.cascada-container, .sql-terminal, .jinja-puente, .css-cabina, .js-cabina');
    contenidos.forEach(c => {
        c.style.display = 'none';
        c.classList.remove('activa-efecto'); // Limpia los efectos visuales
    });

    const tarjetas = document.querySelectorAll('.tarjeta-interior');
    tarjetas.forEach(t => t.classList.remove('activa'));

    const puertaIzq = document.getElementById('puertaIzquierda');
    const puertaDer = document.getElementById('puertaDerecha');
    
    if (puertaIzq && puertaDer) {
        puertaIzq.style.transform = 'translateX(0)';
        puertaDer.style.transform = 'translateX(0)';
        puertaIzq.style.pointerEvents = 'auto';
        puertaDer.style.pointerEvents = 'auto';
    }
}