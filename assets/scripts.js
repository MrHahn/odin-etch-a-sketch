const grid = document.querySelector('#grid-container');
let gridItems = [];
let userNum = prompt("How many squares per side?")
let resetBtn = document.querySelector('.reset-grid');
let brightness = 1;


prepareGrid(userNum);


 resetBtn.addEventListener('click', () => {
    userNum = prompt("please enter a number 100 or lower");
    brightness = 1;
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
    let randomColor = ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    this.style.background = '#' + randomColor;
    this.style.filter = `brightness(${brightness})`; 
    if ( brightness > 0.1){
        brightness -= .1;
    } else{
        brightness = 0;
    }
    

}

function prepareGrid(userNum){
    if(userNum > 100){
        userNum = prompt("thats too many, please enter a number 100 or lower")
    }else{
        let gridSize = userNum * userNum;
        createGrid(gridSize, userNum);
    }
}

