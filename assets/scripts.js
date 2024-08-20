const grid = document.querySelector('#grid-container');
let gridItems = [];


function createGrid(num){
    for(let i = 0; i < num; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem);
        gridItems.push(gridItem);
        
    } 
}
createGrid(256);


function changeOnHover(){
    console.log(this);
    this.classList.add('hovered');
}



 gridItems.forEach((item) => {
    item.addEventListener('mouseover', changeOnHover )
 });

