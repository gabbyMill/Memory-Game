// GLOBALS:
const container = document.querySelector('#container')
let clickedCards = [];
let revealedCards = 0;


const arrayOfCards = [
    {
        name: 'cardback',
        src: './images/cardback.jpg'
    },
    {
        name: 'tree',
        src: './images/tree.jpg'
    },{
        name: 'blueleaves',
        src: './images/blueleaves.jpg'
    },
    {
        name: 'jaffa',
        src: './images/jaffa.jpg'
    },
    {
        name: 'jerusalem',
        src: './images/jerusalem.jpg'
    },
    {
        name: 'weird',
        src: './images/weird.jpg'
    },
    {
        name: 'man',
        src: './images/man.jpg'
    },
    
]
// fill with back of cards and shuffle
const cardsLength = createCardLengthArray()
cardsLength.push(...cardsLength)
cardsLength.sort(() => 0.5 - Math.random())
for (let i = 0; i < cardsLength.length; i++)  {
    const backOfCard = document.createElement('img')
    backOfCard.setAttribute('src', arrayOfCards[0].src)
    backOfCard.setAttribute('data-cardnum', cardsLength[i])
    container.append(backOfCard)
}

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', flipOver)
})

function flipOver (e) {
    const cardNumber = e.target.dataset.cardnum
    e.target.setAttribute('src', arrayOfCards[cardNumber].src)
    clickedCards.push(cardNumber)
    if (clickedCards.length % 2 === 0) {
        setTimeout(checkIfSame, 250, cardNumber)
    }
}

function checkIfSame (cardNumber) {
    if (clickedCards[0] === clickedCards[1]) {
        updateClassName(cardNumber)
        alert ("Found a match!")
        return clickedCards = []
    } else {
        alert ("Try agian")
        flipToBackSide()
    }
    clickedCards = []
}

function flipToBackSide() {
    images.forEach(image => {
        if (!image.className.includes('revealed')) {
            image.setAttribute('src', arrayOfCards[0].src)
        }
    })
}

function updateClassName (num) {
    images.forEach(image => {
        if (image.dataset.cardnum == num) {
            image.classList.add('revealed')
        }
    })
}

function createCardLengthArray () {
    const lengthArray = []
    for (let i = 1; i < arrayOfCards.length; i++) {
        lengthArray.push(i)
    }
    return lengthArray
}
