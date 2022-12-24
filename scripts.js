const container = document.getElementById('container');


function makeDivs(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        for (let j = 0; j < numDivs; j++){
            let cells = document.createElement('div');
            cells.classList.add('cell');
            container.appendChild(cells);
        }
    }
}
makeDivs(16);

const cells = document.getElementsByClassName('cell');

for (const cell of cells) {
    cell.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = '#2c302d';
    });
}