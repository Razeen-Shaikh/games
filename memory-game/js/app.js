document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'images/haskell',
      img: 'images/haskell.png'
    },
    {
      name: 'images/html5',
      img: 'images/html5.png'
    },
    {
      name: 'images/javascript',
      img: 'images/javascript.png'
    },
    {
      name: 'images/julia',
      img: 'images/julia.png'
    },
    {
      name: 'images/php',
      img: 'images/php.png'
    },
    {
      name: 'images/react',
      img: 'images/react.png'
    },
    {
      name: 'images/haskell',
      img: 'images/haskell.png'
    },
    {
      name: 'images/html5',
      img: 'images/html5.png'
    },
    {
      name: 'images/javascript',
      img: 'images/javascript.png'
    },
    {
      name: 'images/julia',
      img: 'images/julia.png'
    },
    {
      name: 'images/php',
      img: 'images/php.png'
    },
    {
      name: 'images/react',
      img: 'images/react.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  const main = document.querySelector('.container-fluid')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/card.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/card.png')
      cards[optionTwoId].setAttribute('src', 'images/card.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', 'images/color.png')
      cards[optionTwoId].setAttribute('src', 'images/color.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/card.png')
      cards[optionTwoId].setAttribute('src', 'images/card.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      main.removeChild(grid)
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})

