const gridSize = 3;

const board = createArray();
const playerOne = new Player("P1","X",true);
const playerTwo = new Player("P2","O",false);

const gameboard = (function(){
    createBoard();
    // playGame();

})();

function createBoard(){
    let container = document.querySelector('.container');
    let board = container.querySelector('.game-board');
    for(let i=0;i<gridSize;i++){
        for(let j = 0;j<gridSize;j++){
            let grid = document.createElement('div');
            let gridClick = document.createElement('a');
            gridClick.setAttribute('id',`${i},${j}`);
            gridClick.setAttribute('onClick',`playGame(this.id)`);
            gridClick.setAttribute('href','#');
            grid.appendChild(gridClick);
            grid.classList.add(`grids`);
            board.appendChild(grid);
        }
    }
}


function createArray(){
    let arr = [];
    for(let i=0;i<gridSize;i++){
        arr.push(new Array(3).fill(null));
    }
    return arr;
}

function Player(name,marker,turn){
    this.name = name;
    this.marker = marker;
    this.turn = turn;
}

//change this
function playGame(clicked){

    let b = clicked;
    let r = b.split(",");
    
    if(playerOne.turn && board[r[0]][r[1]] == undefined){
        console.log("Player One playing..")
        document.getElementById(b).textContent = playerOne.marker;
        board[r[0]][r[1]] = playerOne.marker
        playerOne.turn = false
        playerTwo.turn = true
    }
    else if(playerTwo.turn && board[r[0]][r[1]] == undefined){
        document.getElementById(b).textContent = playerTwo.marker;
        console.log("Player Two playing..")
        board[r[0]][r[1]] = playerTwo.marker
        playerOne.turn = true
        playerTwo.turn = false
    }

    // Columns
    if(board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0]){
        if(!playerOne.turn)  alert("Player One Won")
        else    alert("Player Two Won")
        return
    }
    else if(board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1]){
        if(!playerOne.turn)  alert("Player One Won")
        else    alert("Player Two Won")
        return
    }
    else if(board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2]){
        if(!playerOne.turn)  alert("Player One Won")
        else    alert("Player Two Won")
        return 
    }
    
    // rows
    else if(board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0]){
        if(!playerOne.turn)  alert("Player One Won")
        else    alert("Player Two Won")
        return

    }
    else if(board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0]){
        if(!playerOne.turn)  alert("Player One Won")
        else    alert("Player Two Won")
        return
    }
    else if(board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0]){
        if(!playerOne.turn)  alert("Player One Won")
        else    alert("Player Two Won")
        return

    }
    
    // diagonal
    else if(board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0]){
        if(!playerOne.turn)  alert("Player One Won")
        else    alert("Player Two Won")
        return
    }
    else if(board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2]){
        if(!playerOne.turn)  alert("Player One Won")
        else    alert("Player Two Won")
        return
    }
    
    else{
        let flatBoard = board.flat();
        console.log(flatBoard);
        while(!flatBoard.includes(null)){
            console.log("inside"+flatBoard);
            alert("Draw!");
            return
        }
    }
}

