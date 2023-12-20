function makeGrid(rownum, colnum, grid, rowvec){ 
    makeRows(rownum, grid);
    makeColumns(colnum, rowvec);
}

function makeRows(rows, grid){
    for (i = 0; i < rows; i++){
        let row = document.createElement('div');
        row.classList.add(rowClass);
        grid.appendChild(row);
    }
}

function makeColumns(columns, rowvec){
    for(i = 0; i < rowvec.length; i++){
        for(j = 0; j < columns; j++){
            let col = document.createElement('div');
            col.classList.add(spaceClass);
            if(spaceClass === "space"){
                col.addEventListener("mouseover", () => {
                    changeColor(col);
                })
                col.addEventListener("mousedown", () => {
                    changeColor(col);
                })
                col.addEventListener("click", () => {
                    changeColor(col);
                })
            }
            else{
                switch (i) {
                    case 0:
                        switch (j) {
                            case 0:
                                col.classList.add("red");
                                col.addEventListener("click", () => {
                                    changePen("red");
                                })
                                break;
                            case 1:
                                col.classList.add("green");
                                col.addEventListener("click", () => {
                                    changePen("green");
                                })
                                break;
                            case 2:
                                col.classList.add("purple");
                                col.addEventListener("click", () => {
                                    changePen("purple");
                                })
                                break;
                        }
                        break;
                    case 1:
                        switch (j) {
                            case 0:
                                col.classList.add("orange");
                                col.addEventListener("click", () => {
                                    changePen("orange");
                                })
                                break;
                            case 1:
                                col.classList.add("blue");
                                col.addEventListener("click", () => {
                                    changePen("blue");
                                })
                                break;
                            case 2: 
                                col.classList.add("pink");
                                col.addEventListener("click", () => {
                                    changePen("pink");
                                })
                                break;
                        }
                        break;
                    case 2:
                        switch (j) {
                            case 0:
                                col.classList.add("yellow");
                                col.addEventListener("click", () => {
                                    changePen("yellow");
                                })
                                break;
                            case 1:
                                col.classList.add("indigo");
                                col.addEventListener("click", () => {
                                    changePen("indigo");
                                })
                                break;
                            case 2:
                                col.classList.add("black");
                                col.addEventListener("click", () => {
                                    changePen("black");
                                })
                                break;
                        }
                        break;
                }
            }
            rowvec[j].appendChild(col);
        }
    }
}

function changeColor(col){
    if(!mouseDown) return;
    if(draw){
        let key = col.classList;
        col.classList.remove(key[1]);
        col.classList.add(currColor);
    }
    else {
        let key = col.classList;
        col.classList.remove(key[1]);
    }
}

function changePen(color){
    currColor = color;
}

function resize(width, height, grid_m, rowvec, spacevec){
    while(grid_m.hasChildNodes()){
        grid_m.removeChild(grid_m.firstChild);
    }
    makeGrid(width, height, grid_m, rowvec);
    let minW = 960/width;
    currSizeW = width;
    let minWS = minW.toString() + "px";
    for(i = 0; i < spacevec.length; i++){
        spacevec[i].style.minWidth = minWS;
        spacevec[i].style.minHeight = minWS;
    }
}

function isNumber(num){
    return typeof num === 'number';
}


rowClass = "rowc";
spaceClass ="spacec";
let currColor = "black";
let mouseDown = 0;
let currSizeW = 16;

document.body.onmousedown = function () {
    mouseDown = 1;
}
document.body.onmouseup = function () {
    mouseDown = 0;
}


const grid_m = document.querySelector("#grid");
let rows = document.getElementsByClassName("row");
let spaces = document.getElementsByClassName("space");

const colorGrid = document.querySelector("#colors");
let rows_c = document.getElementsByClassName("rowc");
let spaces_c = document.getElementsByClassName("spacec");
let draw = 1;

const drawBtn = document.getElementById("draw");
const eraseBtn = document.getElementById("erase");
const resizeBtn = document.getElementById("resize");
const clearBtn = document.getElementById("clear");


drawBtn.addEventListener("click", () => {
    draw = 1;
})

eraseBtn.addEventListener("click", () => {
    draw = 0;
})

resizeBtn.addEventListener("click", () => {
    let width = prompt("Enter a new Grid Size, please");
    if (width > 100){
        width = 100;
    }
    resize(width, width, grid_m, rows, spaces);
})

clearBtn.addEventListener("click", () => {
    resize(currSizeW, currSizeW, grid_m, rows, spaces);
})

makeGrid(3, 3, colorGrid, rows_c);
rowClass = "row";
spaceClass = "space";
resize(32, 32, grid_m, rows, spaces);

