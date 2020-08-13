let gamePlay = []

const resetButton = document.querySelector('.reset-button')
// const winnerText = document.querySelector('.winner-text')
// const showWhoWon = document.querySelector('.who-won')

// function runWhoWon(){

// }

function play(boxId){
    const getPlayer = document.getElementById('player');
    const getBoxId = document.getElementById(boxId);
    
    // gamePlay.splice(boxId,0,player)
    // console.log(`This is box id${boxId}. This is player ${player}`)
    let currentPlayer = getPlayer.innerText;
    let currentSquareText = getBoxId.innerText;
    if(currentSquareText !== ''){
        alert('There is something in the box!');
        return;
    }
    if(currentPlayer === 'X'){
        getPlayer.innerText = 'O';
        getBoxId.innerText= 'X';
        gamePlay[boxId] = 'X';
    }else{
        getPlayer.innerText = 'X';
        getBoxId.innerText= 'O';
        gamePlay[boxId] = 'O';
    }

    // console.log(gamePlay)
    let someoneWon = winnerWatcher(gamePlay);

    if(someoneWon === true){
        alert(`${currentPlayer} is Victorious`)
        resetButton.style = 'visibility: visible;';
        showWhoWon.style = 'visibility: visible;';
        winnerText.style = 'visibility: visible;';
    }
}

function winnerWatcher(gameArray){

    if(gameArray[0] !== undefined && gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]){
        return true;
    }
    if(gameArray[3] !== undefined && gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5]){
        return true;
    }
    if(gameArray[6] !== undefined && gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8] ){
        return true;
    }
    if(gameArray[1] !== undefined && gameArray[1] === gameArray[4] && gameArray[4]=== gameArray[7]){
        return true;
    }
    if(gameArray[2] !== undefined && gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8]){
        return true;
    }
    if(gameArray[0] !== undefined && gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6]){
        return true;
    }
    if(gameArray[2] !== undefined && gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6]){
        return true;
    }
    if(gameArray[0] !== undefined && gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8]){
        return true;
    }
    else{
        let isBoardFull = true;
        for(let i = 0; i < gameArray.length; i++){
            if(gamePlay[i] === undefined){
                isBoardFull = false;
            }
        }
        if(isBoardFull === true){
            alert('The cat wins it!');
            resetButton.style = 'visibility: visible;'
            return false;
        }
    }
}




resetButton.addEventListener('click', function gameReset(){
    for(let i = 0; i < 9; i++){
        gamePlay[i] = undefined;
        let resetID = document.getElementById(i);
        resetID.innerText = '';
        // winnerText.style = 'visibility: hidden;';
        // showWhoWon.style = 'visibility: hidden;';
        resetButton.style = 'visibility: hidden;'
    }
})




// function whoWon(winner){
//     if(winner === "X"){
//         alert("X is Victorious")
//     } else if(winner === "O"){
//         alert("O is Victorious")
//     } else{
//         alert("Cats Game")
//     }
// }
