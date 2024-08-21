const grid = document.querySelector('#grid-container');
let gridItems = [];
let userNum = prompt("How many squares per side?")

if(userNum > 100){
    userNum = prompt("thats too many, please enter a number 100 or lower")
}else{
    let gridSize = userNum * userNum;
    createGrid(gridSize, userNum);
}



 gridItems.forEach((item) => {
    item.addEventListener('mouseover', changeOnHover )
 });


 function createGrid(num, userNum){
    let boxWidth = (960 / userNum) - 2; // subtracting the borders on each side
    grid.innerHTML == '';
    for(let i = 0; i < num; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = boxWidth + 'px';
        gridItem.style.height = boxWidth + 'px';
        grid.appendChild(gridItem);
        gridItems.push(gridItem);
        
    } 
}
 function changeOnHover(){
    this.classList.add('hovered');
}

