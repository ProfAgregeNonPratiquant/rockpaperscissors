const choices = ['rock', 'paper', 'scissors']

const gameOver = document.querySelector('.game-over')
gameOver.style.display = "none"

const replay = gameOver.querySelector('#replay')

replay.addEventListener(
    'click',
    () => {
        playerScore = 0
        computerScore = 0
        gameControls.style.display = "initial"
        gameOver.style.display = 'none'
        score.textContent = ''

    }

)

const gameControls = document.querySelector(".game-controls")

const controls = document.querySelector('.controls')
const choicesButtons = controls.querySelectorAll('button')

let playerCard = document.querySelector('.player-card')
let playerCardContent = playerCard.querySelector('p')
let computerCard = document.querySelector('.computer-card')
let computerCardContent = computerCard.querySelector('p')
const computerPlay = () => choices[Math.floor(Math.random() * 3)]

choicesButtons.forEach(
    (button) => {
        button.addEventListener(
            'click',
            (e) => {
                let playerChoice = e.target.getAttribute('id')
                let computerChoice = computerPlay()
                playerCardContent.textContent = playerChoice
                computerCardContent.textContent = computerChoice
                let singleRoundResult = singleRound(playerChoice, computerChoice)
                updateScore(singleRoundResult)
            }
        )
    }
)

let playerScore = 0
let computerScore = 0

const scoreDiv = document.querySelector('.score')
const score = scoreDiv.querySelector('p')

const theWinnerIs = document.getElementById('theWinnerIs')

function updateScore(singleRoundResult) {
    if (singleRoundResult > 0) {
        playerScore += singleRoundResult
    }
    else {
        computerScore -= singleRoundResult
    }
    score.textContent = playerScore + " - " + computerScore

    if (playerScore === 5 || computerScore === 5) {
        gameControls.style.display = "none"
        gameOver.style.display = 'initial'
        if (playerScore === computerScore) {
            theWinnerIs.textContent = "No one wins, everybody lose..."
        }
        else theWinnerIs.textContent = playerScore > computerScore ? "You win, computer lose" : "You lose, computer wins"
    }
}




function singleRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 0
    }
    else {
        return (choices.indexOf(computerChoice) - choices.indexOf(playerChoice) + 3) % 3 === 2 ? 1 : -1
    }
}

function playGame() {
    let roundResult = 0
    for (let i = 0; i < 5; i++) {
        roundResult += singleRound(prompt("What's your choice?"), computerPlay())
    }
    if (roundResult === 0) {
        console.log('Draw')
    }
    else {
        console.log(roundResult > 0 ? 'You win!' : 'You lose...')
    }
}

//playGame()