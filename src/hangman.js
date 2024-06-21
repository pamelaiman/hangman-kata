/**
 *
 * @param {string[]} guessedLetters
 * @param {string} wordToGuess
 * @returns {string[]}
 */

const threeLetterWords = ["cat", "dog", "sun", "bat", "hat"];
const fourLetterWords = ["moon", "star", "fish", "frog", "tree"];
const fiveLetterWords = ["apple", "grape", "train", "table", "chair"];
const sixLetterWords = ["planet", "castle", "orange", "bottle", "sponge"];
const sevenLetterWords = [
  "diamond",
  "picture",
  "monster",
  "country",
  "freight",
];
const eightLetterWords = [
  "elephant",
  "daughter",
  "sentence",
  "building",
  "computer",
];
const nineLetterWords = [
  "pineapple",
  "strawberry",
  "television",
  "kangaroos",
  "direction",
];
const tenLetterWords = [
  "basketball",
  "complicated",
  "information",
  "volleyball",
  "assignment",
];

// function isALetter(letter) {
//   if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= "Z")) {
//     return true;
//   } else {
//     return false;
//   }
// }

function hangman(guessedLetters, wordToGuess) {
  const showUser = [];

  for (let char of wordToGuess) {
    if (guessedLetters.includes(char)) {
      showUser.push(char);
    } else {
      showUser.push("_");
    }
  }
  return showUser;
}
export { hangman };
