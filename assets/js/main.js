let playElement = document.getElementById("play");

playElement = document.addEventListener("click", difficultLevel)

function difficultLevel() {
    let valore = document.getElementById("difficult").value;
    console.log(valore)
}



function generateGrid(selector, element_name, class_name, number_of_cells) {
    const cellsElement = document.querySelector(selector)
    for (let i = 1; i <= number_of_cells; i++) {
        const cell = document.createElement(element_name)
        cell.classList.add(class_name)
        cellsElement.append(cell)
    }
}


function selectCells(selector) {
    const cells = document.querySelectorAll(selector)
    return cells
}

function activateCell(selector, active_class) {
    const cells = selectCells(selector)

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.addEventListener('click', function() {
            this.classList.toggle(active_class);
        })
    }
}

function fillCells(selector) {
    const cells = selectCells(selector)
    for (let i = 0; i <= cells.length; i++) {
        const cell = cells[i];
        let numbToStamp = 1 + i;
        cell.innerHTML = `<span>${numbToStamp}</span>`;
    }
}






generateGrid('.celle', 'div', 'cella_facile', 100)
activateCell('.cella_facile', 'active')
fillCells('.cella_facile')