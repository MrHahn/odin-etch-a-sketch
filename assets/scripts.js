function createGrid(num){
    const grid = document.querySelector('#grid-container');
    for(let i = 0; i < num; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem);
    } 
}

createGrid(256);