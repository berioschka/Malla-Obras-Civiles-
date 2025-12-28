/* Estructura de datos:
  Cada ramo tiene un ID único, un nombre visible y una lista de IDs de requisitos.
*/

const dataMalla = [
    // --- SEMESTRE 1 ---
    { id: 'ingles-1', nombre: 'Inglés I', semestre: 1, requisitos: [] },
    { id: 'calculo-1', nombre: 'Cálculo I', semestre: 1, requisitos: [] },
    { id: 'algebra-1', nombre: 'Álgebra I', semestre: 1, requisitos: [] },
    { id: 'fisica-1', nombre: 'Física I', semestre: 1, requisitos: [] },
    { id: 'intro-diseno', nombre: 'Introducción al Diseño en Ingeniería', semestre: 1, requisitos: [] },

    // --- SEMESTRE 2 ---
    { id: 'ingles-2', nombre: 'Inglés II', semestre: 2, requisitos: ['ingles-1'] },
    { id: 'calculo-2', nombre: 'Cálculo II', semestre: 2, requisitos: ['calculo-1'] },
    { id: 'algebra-2', nombre: 'Álgebra II', semestre: 2, requisitos: ['algebra-1'] },
    { id: 'fisica-2', nombre: 'Física II', semestre: 2, requisitos: ['fisica-1'] },
    { id: 'fund-progra', nombre: 'Fundamentos de Programación', semestre: 2, requisitos: ['intro-diseno'] },
    { id: 'analisis-est', nombre: 'Análisis Estadístico', semestre: 2, requisitos: ['calculo-1'] },

    // --- SEMESTRE 3 ---
    { id: 'ingles-3', nombre: 'Inglés III', semestre: 3, requisitos: ['ingles-2'] },
    { id: 'calculo-3', nombre: 'Cálculo III', semestre: 3, requisitos: ['calculo-2'] },
    { id: 'ecu-dif', nombre: 'Ecuaciones Diferenciales', semestre: 3, requisitos: ['calculo-2', 'algebra-2'] },
    { id: 'fund-eco', nombre: 'Fundamentos de Economía', semestre: 3, requisitos: ['calculo-1'] },
    { id: 'estatica', nombre: 'Estática Aplicada', semestre: 3, requisitos: [] }, // No especificaste requisito explicito, asumo libre o falta info.
    { id: 'herr-comp-1', nombre: 'Herramientas Computacionales I', semestre: 3, requisitos: ['fund-progra'] },

    // --- SEMESTRE 4 ---
    { id: 'ingles-4', nombre: 'Inglés IV', semestre: 4, requisitos: ['ingles-3'] },
    { id: 'taller-diseno', nombre: 'Taller de Diseño', semestre: 4, requisitos: ['fund-eco'] },
    { id: 'analisis-estruc', nombre: 'Análisis Estructural', semestre: 4, requisitos: ['ecu-dif', 'estatica'] },
    { id: 'materiales', nombre: 'Materiales de Ingeniería', semestre: 4, requisitos: ['ingles-2', 'calculo-2', 'algebra-2', 'fisica-2', 'fund-progra', 'analisis-est'] },
    { id: 'topografia', nombre: 'Topografía', semestre: 4, requisitos: ['herr-comp-1'] },
    { id: 'ciencias-amb', nombre: 'Ciencias Ambientales', semestre: 4, requisitos: ['ingles-2', 'calculo-2', 'algebra-2', 'fisica-2', 'fund-progra', 'analisis-est'] },

    // --- SEMESTRE 5 ---
    { id: 'mec-fluidos', nombre: 'Mecánica de Fluidos', semestre: 5, requisitos: ['ciencias-amb'] },
    { id: 'tec-hormigon', nombre: 'Tecnología del Hormigón', semestre: 5, requisitos: ['materiales'] },
    { id: 'mec-solidos', nombre: 'Mecánica de Sólidos', semestre: 5, requisitos: ['analisis-estruc'] },
    { id: 'edificacion', nombre: 'Edificación', semestre: 5, requisitos: ['topografia'] },
    { id: 'taller-int-1', nombre: 'Taller de Integración I', semestre: 5, requisitos: ['ingles-4', 'taller-diseno', 'analisis-estruc', 'materiales', 'topografia', 'ciencias-amb'] },

    // --- SEMESTRE 6 ---
    { id: 'hidraulica', nombre: 'Hidráulica', semestre: 6, requisitos: ['mec-fluidos'] },
    { id: 'ing-sismica', nombre: 'Ingeniería Sísmica', semestre: 6, requisitos: ['mec-solidos'] },
    { id: 'invest-oper', nombre: 'Investigación de Operaciones', semestre: 6, requisitos: ['ingles-4', 'taller-diseno', 'analisis-estruc', 'materiales', 'topografia', 'ciencias-amb'] },
    { id: 'mec-suelos-1', nombre: 'Mecánica de Suelos I', semestre: 6, requisitos: ['edificacion'] },
    { id: 'ingles-prof-1', nombre: 'Inglés Profesional I', semestre: 6, requisitos: ['ingles-4'] },
    { id: 'herr-comp-2', nombre: 'Herramientas Computacionales II', semestre: 6, requisitos: ['edificacion'] },

    // --- SEMESTRE 7 ---
    { id: 'hidrologia', nombre: 'Hidrología Aplicada', semestre: 7, requisitos: ['hidraulica'] },
    { id: 'dis-hormigon-1', nombre: 'Diseño en Hormigón Armado I', semestre: 7, requisitos: ['ing-sismica', 'mec-suelos-1'] },
    { id: 'dis-acero', nombre: 'Diseño de Estructuras de Acero', semestre: 7, requisitos: ['ing-sismica'] },
    { id: 'mec-suelos-2', nombre: 'Mecánica de Suelos II', semestre: 7, requisitos: ['mec-suelos-1'] },
    { id: 'taller-int-2', nombre: 'Taller de Integración II', semestre: 7, requisitos: ['mec-suelos-1', 'herr-comp-2'] },

    // --- SEMESTRE 8 ---
    { id: 'redes-agua', nombre: 'Redes de Agua Potable y Alc.', semestre: 8, requisitos: ['hidrologia'] },
    { id: 'topico-1', nombre: 'Tópico de Especialidad I', semestre: 8, requisitos: ['hidraulica', 'ing-sismica', 'invest-oper', 'mec-suelos-1', 'ingles-prof-1', 'herr-comp-2'] },
    { id: 'dis-hormigon-2', nombre: 'Diseño de Hormigón Armado II', semestre: 8, requisitos: ['dis-hormigon-1'] },
    { id: 'dis-caminos', nombre: 'Diseño de Caminos', semestre: 8, requisitos: ['mec-suelos-2'] },
    { id: 'ingles-prof-2', nombre: 'Inglés Profesional II', semestre: 8, requisitos: ['ingles-prof-1'] },
    { id: 'eval-proyectos', nombre: 'Evaluación de Proyectos', semestre: 8, requisitos: ['taller-int-1'] }, // Nota: Taller Int 1 o 2? En tu lista dice "Taller de Integración", asumiré el 1 por lógica de flujo, si es el 2, cámbialo a 'taller-int-2'.

    // --- SEMESTRE 9 ---
    { id: 'admin-obras', nombre: 'Administración de Obras', semestre: 9, requisitos: ['eval-proyectos'] },
    { id: 'topico-2', nombre: 'Tópico de Especialidad II', semestre: 9, requisitos: ['hidrologia', 'dis-hormigon-1', 'dis-acero', 'mec-suelos-2', 'taller-int-2'] },
    { id: 'ing-vial', nombre: 'Ingeniería Vial', semestre: 9, requisitos: ['dis-caminos'] },
    { id: 'plan-proyectos', nombre: 'Planificación de Proyectos', semestre: 9, requisitos: ['eval-proyectos'] },
    { id: 'topico-3', nombre: 'Tópico de Especialidad III', semestre: 9, requisitos: ['hidrologia', 'dis-hormigon-1', 'dis-acero', 'mec-suelos-2', 'taller-int-2'] },
    { id: 'electivo-1', nombre: 'Electivo I', semestre: 9, requisitos: ['hidrologia', 'dis-hormigon-1', 'dis-acero', 'mec-suelos-2', 'taller-int-2'] },

    // --- SEMESTRE 10 ---
    { id: 'sem-titulacion', nombre: 'Seminario de Titulación', semestre: 10, requisitos: ['admin-obras', 'topico-2', 'ing-vial', 'plan-proyectos', 'topico-3', 'electivo-1'] },
    { id: 'dir-empresa', nombre: 'Dirección de Empresa', semestre: 10, requisitos: ['admin-obras'] },
    { id: 'topico-4', nombre: 'Tópico de Especialidad IV', semestre: 10, requisitos: ['redes-agua', 'topico-1', 'dis-hormigon-2', 'dis-caminos', 'ingles-prof-2', 'eval-proyectos'] },
    { id: 'gestion-amb', nombre: 'Gestión Ambiental y Ocup.', semestre: 10, requisitos: ['redes-agua'] },
    { id: 'taller-int-3', nombre: 'Taller de Integración III', semestre: 10, requisitos: ['dis-acero', 'mec-suelos-2', 'dis-hormigon-2'] },
    { id: 'electivo-2', nombre: 'Electivo II', semestre: 10, requisitos: ['redes-agua', 'topico-1', 'dis-hormigon-2', 'dis-caminos', 'ingles-prof-2', 'eval-proyectos'] },

    // --- SEMESTRE 11 ---
    { id: 'trabajo-tit', nombre: 'Trabajo de Titulación', semestre: 11, requisitos: ['sem-titulacion', 'dir-empresa', 'topico-4', 'gestion-amb', 'taller-int-3', 'electivo-2'] }
];

// Estado global de ramos aprobados (Set para evitar duplicados)
let ramosAprobados = new Set();

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    cargarProgreso();
    renderizarMalla();
});

// Función para guardar en LocalStorage
function guardarProgreso() {
    localStorage.setItem('mallaProgreso', JSON.stringify([...ramosAprobados]));
}

// Función para cargar de LocalStorage
function cargarProgreso() {
    const guardado = localStorage.getItem('mallaProgreso');
    if (guardado) {
        ramosAprobados = new Set(JSON.parse(guardado));
    }
}

// Renderiza la malla completa
function renderizarMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = ''; // Limpiar

    // Agrupar ramos por semestre
    for (let i = 1; i <= 11; i++) {
        const columna = document.createElement('div');
        columna.className = 'semestre-columna';
        
        const titulo = document.createElement('div');
        titulo.className = 'semestre-titulo';
        titulo.textContent = `Semestre ${i}`;
        columna.appendChild(titulo);

        const ramosDelSemestre = dataMalla.filter(r => r.semestre === i);

        ramosDelSemestre.forEach(ramo => {
            const card = crearTarjetaRamo(ramo);
            columna.appendChild(card);
        });

        container.appendChild(columna);
    }
}

// Crea el elemento visual del ramo y define su lógica
function crearTarjetaRamo(ramo) {
    const div = document.createElement('div');
    div.className = 'ramo-card';
    div.textContent = ramo.nombre;
    div.id = `ramo-${ramo.id}`;

    // Verificar estado
    const estaAprobado = ramosAprobados.has(ramo.id);
    const requisitosCumplidos = verificarRequisitos(ramo);

    // Asignar clases CSS según estado
    if (estaAprobado) {
        div.classList.add('aprobado');
    } else if (requisitosCumplidos) {
        div.classList.add('disponible');
    } else {
        div.classList.add('bloqueado');
    }

    // Evento Click
    div.addEventListener('click', () => {
        manejarClickRamo(ramo, estaAprobado, requisitosCumplidos);
    });

    return div;
}

// Verifica si todos los requisitos de un ramo están en el Set de aprobados
function verificarRequisitos(ramo) {
    if (ramo.requisitos.length === 0) return true;
    return ramo.requisitos.every(reqId => ramosAprobados.has(reqId));
}

// Lógica al hacer clic
function manejarClickRamo(ramo, estaAprobado, requisitosCumplidos) {
    if (estaAprobado) {
        // Desmarcar (Si ya estaba aprobado)
        ramosAprobados.delete(ramo.id);
        
        // También debemos desmarcar recursivamente los que dependían de este
        desmarcarDependientes(ramo.id);
        
    } else {
        // Intentar marcar
        if (requisitosCumplidos) {
            ramosAprobados.add(ramo.id);
        } else {
            // Mostrar alerta de bloqueado
            mostrarAlertaBloqueo(ramo);
            return; // Salir sin renderizar cambios
        }
    }

    guardarProgreso();
    renderizarMalla(); // Re-renderizar para actualizar colores de todos los ramos
}

// Función recursiva para desmarcar ramos futuros si desapruebo un requisito previo
function desmarcarDependientes(idDesaprobado) {
    // Buscar todos los ramos que tienen este ID como requisito
    const dependientes = dataMalla.filter(r => r.requisitos.includes(idDesaprobado));
    
    dependientes.forEach(dep => {
        if (ramosAprobados.has(dep.id)) {
            ramosAprobados.delete(dep.id);
            desmarcarDependientes(dep.id); // Recursividad
        }
    });
}

// Mostrar el modal con los requisitos faltantes
function mostrarAlertaBloqueo(ramo) {
    const modal = document.getElementById('modal-alerta');
    const mensaje = document.getElementById('mensaje-modal');
    
    // Buscar nombres de los requisitos faltantes
    const faltantes = ramo.requisitos
        .filter(reqId => !ramosAprobados.has(reqId))
        .map(reqId => {
            const r = dataMalla.find(d => d.id === reqId);
            return r ? r.nombre : reqId;
        });

    mensaje.innerHTML = `No puedes aprobar <strong>${ramo.nombre}</strong>.<br><br>
                         Te falta aprobar:<br> 
                         <ul style="text-align:left; display:inline-block;"><li>${faltantes.join('</li><li>')}</li></ul>`;
    
    modal.style.display = 'block';

    // Cerrar modal
    const span = document.getElementsByClassName("close-btn")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Reiniciar todo
function resetearMalla() {
    if(confirm("¿Estás seguro de que quieres borrar todo tu progreso?")) {
        ramosAprobados.clear();
        guardarProgreso();
        renderizarMalla();
    }
     }
