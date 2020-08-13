// console.log('The house always wins!')

const getCardId = document.getElementById('cardId')
const getNewCardInfo = document.getElementById('changeColor')

// console.log(getCardId)
// console.log(getNewCardInfo)

function changeColor(){
    const whichCard = document.getElementById(getCardId.value)
    console.log(whichCard)
    
    whichCard.style.color = getNewCardInfo.value;
}