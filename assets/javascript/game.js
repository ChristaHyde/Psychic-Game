


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// console.log(letters[Math.floor(Math.random() * letters.length)])

var computerLetter = letters[Math.floor(Math.random() * letters.length)]
console.log(computerLetter)

var wins = 0
var losses = 0
var guessesRemaining = 9
var yourGuesses = []
var resetGameFlag = 0


document.onkeydown = function (event) {
    yourGuesses.push(event.key)
    // console.log(event.key)
    if (computerLetter === event.key) {
        console.log("user is right")
        // Take wins and plus 1
        wins++
        console.log(wins)
        console.log(computerLetter)
        resetGameFlag = 1

    } else {
        console.log("user is wrong")
        // Number of Guesses remaining goes down 1
        guessesRemaining--
        console.log("guesses Remaining" + guessesRemaining)
        // If guesses remaining =<0 then losses goes up by 1
        if (guessesRemaining === 0) {
            losses++
            console.log(losses)
            resetGameFlag = 1

        }
        if (losses === 1) {

        }

    }
    resetGame()
    printHTML()
}

function printHTML() {
    document.querySelector("#wins").innerHTML = wins
    document.querySelector("#losses").innerHTML = losses
    document.querySelector("#guessesRemaining").innerHTML = guessesRemaining
    document.querySelector("#yourGuesses").innerHTML = yourGuesses.join(",")
}

function resetGame() {

    if (resetGameFlag === 1) {
        yourGuesses = []
        guessesRemaining = 9
        computerLetter = letters[Math.floor(Math.random() * letters.length)]
        resetGameFlag = 0
        console.log(computerLetter)
        console.log("reset Game FUnction")
    }

}