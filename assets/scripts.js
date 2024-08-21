const grid = document.querySelector('#grid-container');
let gridItems = [];
let userNum = prompt("How many squares per side?")
let resetBtn = document.querySelector('.reset-grid');


prepareGrid(userNum);


 resetBtn.addEventListener('click', () => {
    userNum = prompt("please enter a number 100 or lower");
    prepareGrid(userNum);
 })


 function createGrid(num, userNum){
    gridItems.length = 0;
    grid.innerHTML = '';
    let boxWidth = (960 / userNum) - 2; // subtracting the borders on each side
    for(let i = 0; i < num; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = boxWidth + 'px';
        gridItem.style.height = boxWidth + 'px';
        grid.appendChild(gridItem);
        gridItems.push(gridItem);  
    } 
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', changeOnHover )
     });
}

 function changeOnHover(){
    this.classList.add('hovered');
}

function prepareGrid(userNum){
    if(userNum > 100){
        userNum = prompt("thats too many, please enter a number 100 or lower")
    }else{
        let gridSize = userNum * userNum;
        createGrid(gridSize, userNum);
    }
}

