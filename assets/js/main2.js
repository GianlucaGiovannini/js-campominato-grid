// selezione bottone 
let playElement = document.getElementById("play");
// Evento al click del bottone per far partire le funzioni che generano la griglia e l'attivatore delle celle al click
playElement.addEventListener("click", difficultLevel);

function difficultLevel() {

    let valueInputElement = document.getElementById("difficult").value;

    if (valueInputElement === "facile") {
        generateGrid(100, "cella_facile")
        activateCell(".cella_facile", "active")
    } else if (valueInputElement === "media") {
        generateGrid(81, "cella_media")
        activateCell(".cella_media", "active")
    } else {
        generateGrid(49, "cella_difficile")
        activateCell(".cella_difficile", "active")
    }
}

let celleElement = document.querySelector(".celle")

/**
 * ## Generatore di celle automatico
 * @param {string} num_celle numero di celle che si vuole creare
 * @param {string} class_name nome classe da mettere nel tag interno all'elemento che si crea
 */
function generateGrid(num_celle, class_name) {
    celleElement.innerHTML = "";
    for (let i = 1; i <= num_celle; i++) {
        let cellaContent = `<div class="${class_name}"><span>${i}</span></div>`
        celleElement.insertAdjacentHTML("beforeend", cellaContent);
    }
}

/**
 * ## Attivatore celle al click
 * @param {string} selector nome classe cella da attivare al click
 * @param {string} class_active nome classe per l'attivazione al click
 */
function activateCell(selector, class_active) {
    const celle = document.querySelectorAll(selector)

    for (let i = 0; i < celle.length; i++) {
        const cella = celle[i];
        cella.addEventListener('click', function() {
            this.classList.toggle(class_active);
        })
    }
}