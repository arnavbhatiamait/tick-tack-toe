const boxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector('.game-info');
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// initGame();
// *initail game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    boxesEmptyUI();
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `CurrentPlayer-  ${currentPlayer}`;
}
// * to return the new game in page
function boxesEmptyUI() {
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        // ? remove green
        // document.body.classList.toggle("win");
        box.classList=`box box${index+1}`;
    })
};



// *main funtion logic
function checkGameOver() {
    let answer = "";
    // all 3 boxes are non empty and exactyl same
    winningPositions.forEach((position) => {
        if ((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[2]] === gameGrid[position[1]])) {
            // check winner is X
            if (gameGrid[position[0]] === "X") {
                answer = "X";
            }
            else {
                answer = "O";
            }


            // now we have a winner
            // ! disable pointer event as we can hav more than one winner
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");


        }
    });
    if (answer !== "") {
        gameInfo.innerText = `Winner Player - ${answer}`;
        // new game button
        newGameBtn.classList.add("active");
        return;
    }
    // !tie check
    let fillCount=0;
    gameGrid.forEach((box)=>{
        if (box!==""){
            fillCount++;
        }
    })
    if (fillCount===9){
        gameInfo.innerText="Game Tied!";
        newGameBtn.classList.add("active");

    }

};

function swapTurn() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
    gameInfo.innerText = `CurrentPlayer-  ${currentPlayer}`;

};
function handleClick(index) {

    if (gameGrid[index] === "") {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        // !impt
        boxes[index].style.pointerEvents = "none";
        // !swapping
        swapTurn();
        // check for win
        checkGameOver();
    }
};

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    }
    )
});
newGameBtn.addEventListener("onclick", initGame());

