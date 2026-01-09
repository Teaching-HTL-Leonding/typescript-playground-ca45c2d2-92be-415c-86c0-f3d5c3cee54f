const WIDTH = 500;
const HEIGHT = 300;

// Enter the word to guess here.
//                   vvv
//                   vvv
const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");

  let wordToScrambel = wordToGuess
  let scrambledWord = ""
  while(wordToScramble.length > 0) {
    let letterIndex = Math.floor(random(wordToScrambel.length))
    scrambledWord+= wordToScrambel[letterIndex]
    wordToScrambel = wordToScrambel.substring(0,letterIndex)
    + wordToScrambel.substring(letterIndex+1)


  }
  textAlign(CENTER,CENTER)
  fill("white")
  textSize(75)
  text(scrambledWord,WIDTH/2,HEIGHT/2)
}

// This method will be called automatically when the user clicks "Guess".
// The guessed text will be in "textInput".
function guess(textInput: string) {
  fill("white")
  if(textInput === wordToGuess){
   background("green")
   textSize(75)
   text("Correct!", WIDTH/2,HEIGHT/2)
  }else{
    background("red")
    textSize(50)
    text(`Wrong!/nIt was" ${wordToGuess}"`,WIDTH/2,HEIGHT/2)
  }
}
