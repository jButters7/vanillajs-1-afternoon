let gamePlay = []


function play(boxId){
    const getPlayer = document.getElementById('player');
    const getBoxId = document.getElementById(boxId);

    // gamePlay.splice(boxId,0,player)
    // console.log(`This is box id${boxId}. This is player ${player}`)
    
    if(getPlayer.innerText === 'X'){
        getPlayer.innerText = 'O';
        getBoxId.innerText = 'X'
        gamePlay[boxId] = 'X';
    } else{
        getPlayer.innerText = 'X'
        getBoxId.innerText = 'O'
        gamePlay[boxId] = 'O';
    }
    // console.log(gamePlay)
    function winnerWatcher(gameArray){

        let gameComplete = false;
        // for(let i = 0; i <= 8; i++){
        //     if(gamePlay[i] === undefined ||){
        //         gameComplete = false;
        //     } else{
        //         alert('The cat wins it again');
        //     }
        // }

        if(gamePlay[0] === undefined || gamePlay[1] === undefined || gamePlay[2] === undefined || gamePlay[3] === undefined || gamePlay[4] === undefined || gamePlay[5] === undefined || gamePlay[6] === undefined || gamePlay[7] === undefined || gamePlay[8] === undefined){
            gameComplete = false;
        } else{
            gameComplete = true;
            alert(`Your buddy Cat took the "W"`)
        }
        

        if(gameComplete === false){
            if(gameArray[0] === 'X' && gameArray[1] === 'X' && gameArray[2] === 'X'){
                alert("X is Victorious")
            }else if(gameArray[0] === 'O' && gameArray[1] === 'O' && gameArray[2] === 'O'){
                alert("O is Victorious")
            }else if(gameArray[3] === 'X' && gameArray[4] === 'X' && gameArray[5] === 'X'){
                alert("X is Victorious")
            }else if(gameArray[3] === 'O' && gameArray[4] === 'O' && gameArray[5] === 'O'){
                alert("O is Victorious")
            }else if(gameArray[6] === 'X' && gameArray[7] === 'X' && gameArray[8] === 'X'){
                alert("X is Victorious")
            }else if(gameArray[6] === 'O' && gameArray[7] === 'O' && gameArray[8] === 'O'){
                alert("O is Victorious")
            }else if(gameArray[1] === 'X' && gameArray[4] === 'X' && gameArray[7] === 'X'){
                alert("X is Victorious")
            }else if(gameArray[1] === 'O' && gameArray[4] === 'O' && gameArray[7] === 'O'){
                alert("O is Victorious")
            }else if(gameArray[2] === 'X' && gameArray[5] === 'X' && gameArray[8] === 'X'){
                alert("X is Victorious")
            }else if(gameArray[2] === 'O' && gameArray[5] === 'O' && gameArray[8] === 'O'){
                alert("O is Victorious")
            }else if(gameArray[0] === 'X' && gameArray[3] === 'X' && gameArray[6] === 'X'){
                alert("X is Victorious")
            }else if(gameArray[0] === 'O' && gameArray[3] === 'O' && gameArray[6] === 'O'){
                alert("O is Victorious")
            }else if(gameArray[2] === 'X' && gameArray[4] === 'X' && gameArray[6] === 'X'){
                alert("X is Victorious")
            }else if(gameArray[2] === 'O' && gameArray[4] === 'O' && gameArray[6] === 'O'){
                alert("O is Victorious")
            }else if(gameArray[0] === 'X' && gameArray[4] === 'X' && gameArray[8] === 'X'){
                alert("X is Victorious")
            }else if(gameArray[0] === 'O' && gameArray[4] === 'O' && gameArray[8] === 'O'){
                alert("O is Victorious")
            }
        }

        if(gameComplete === true){
            
        }

    }
    winnerWatcher(gamePlay)

}




// function whoWon(winner){
//     if(winner === "X"){
//         alert("X is Victorious")
//     } else if(winner === "O"){
//         alert("O is Victorious")
//     } else{
//         alert("Cats Game")
//     }
// }
