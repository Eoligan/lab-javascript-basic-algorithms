console.log("Hola mundo");

// Iteration 1: Names and Input

let hacker1 = "Sergio";
let hacker2 = "Cornejuela";
console.log(
  `The driver's name is ${hacker1} and the navigator's name is ${hacker2}`
);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops

let newHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1.charAt(i).toUpperCase();
  newHacker1 += ` `;
}
console.log(newHacker1);

let newHacker2 = "";
for (let i = hacker2.length; i > 0; i--) {
  newHacker2 += hacker2.charAt(i - 1);
}
console.log(newHacker2);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name.");
}

//Bonus 1
//Make your program count the number of words in the string.
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra elit eget congue pellentesque. Donec nunc metus, fringilla a leo et, fermentum vestibulum mi. Suspendisse a mattis purus, ac mollis nisl. Nulla fringilla, lectus a laoreet viverra, arcu nisi mattis lorem, sit amet suscipit dui mauris eu eros. Ut rhoncus leo non magna egestas, sed placerat dolor tristique. Ut quis orci nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam nec hendrerit erat. Donec ut viverra ex, at consectetur nulla. Suspendisse potenti. Proin pretium mi eget nibh consequat gravida. Proin mi nisl, pharetra quis suscipit ac, scelerisque feugiat ipsum. Morbi eget lorem vitae nisi luctus ultrices.

Duis commodo pulvinar orci et aliquam. Maecenas venenatis elit euismod, consectetur nibh id, dapibus felis. Duis non gravida sem. Etiam feugiat a metus et varius. Duis facilisis, velit non maximus pharetra, augue nisl consequat nulla, luctus malesuada erat justo porta quam. Cras in magna eget purus bibendum sodales. Phasellus porta quam pharetra nibh viverra, eget convallis nunc semper. Integer egestas sapien et faucibus vestibulum. Donec scelerisque tellus id lorem aliquet, eu interdum ante porta. Quisque laoreet commodo congue.

Integer tincidunt, sem eu pulvinar lobortis, erat nibh condimentum ex, sed cursus lacus felis id mauris. Duis scelerisque nibh at urna vulputate, id aliquet nibh hendrerit. Aliquam nisl dui, volutpat nec blandit sed, facilisis vitae felis. Suspendisse et euismod ligula, quis iaculis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in nibh vel elit volutpat pellentesque. Donec hendrerit diam in orci dictum, ut vulputate lacus rhoncus. Duis iaculis vulputate nunc, a posuere quam mollis porta. Proin lacinia, mauris nec convallis ultrices, massa magna iaculis nulla, convallis rhoncus metus justo et leo. Nunc ut erat laoreet, porta purus auctor, vestibulum libero. Suspendisse quis blandit augue. Duis tincidunt massa sem, vel efficitur nisl efficitur eleifend. Suspendisse potenti. Mauris congue sollicitudin nunc, et sagittis eros hendrerit eget. Suspendisse id risus et enim gravida placerat at in arcu.`;

let shortText = `Lorem   ipsum et dolor sit amet et`;
let counter = 1;
let foundWord = false;

//First version --> counting spaces between words. Problem: also counts a word if the string end with space but is not true. And also counts every space in it as a word.

for (let i = 0; i < shortText.length; i++) {
  if (shortText.charAt(i) === " ") {
    counter++;
  }
}
console.log(`First version number of words is incorrect: ${counter}`);

//Second version --> Good version

counter = 0;
foundWord = false;
for (let i = 0; i < shortText.length; i++) {
  if (shortText.charAt(i) !== " " && !foundWord) {
    foundWord = true;
    counter++;
  } else if (shortText.charAt(i) === " ") {
    foundWord = false;
  }
}
console.log(`Second version number of words: ${counter}`);

//Bonus 1 part 2
//Make your program count the number of times the Latin word et appears.

let word = "";
counter = 0;

for (let i in shortText) {
  if (shortText[i] === " ") {
    if (word === "et") {
      counter++;
    }
    word = "";
  } else {
    word += shortText[i];
  }
}
if (word === "et") {
  // needed for counting the word in the last position of the string
  counter++;
}
console.log(`Number of times of the word 'et': ${counter}`);

// with split()

let words = shortText.split(" ");
counter = 0;

for (let i in words) {
  if (words[i] === "et") {
    counter++;
  }
}
console.log(`Number of times of the word 'et' with split(): ${counter}`);

// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phrase = phraseToCheck.toLowerCase();
let esPalindromo = true;

//Function to check if we have symbols in the phrase so we erase them to compared later on
function esSimbolo(char) {
  const simbolos = '!@#$%^&*()_+-=[]{}|;:",.<>/?\\';
  for (let i in simbolos) {
    if (char === simbolos[i]) {
      return true;
    }
  }
  return false;
}

//There is a need to clean the phrase to compare later character by character
let cleanPhrase = "";

for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] !== " " && !esSimbolo(phrase[i])) {
    cleanPhrase += phrase[i];
  }
}

//Check if it is palindrome
for (let i = 0; i < cleanPhrase.length; i++) {
  if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - i - 1]) {
    esPalindromo = false;
    break;
  }
}
if (esPalindromo) {
  console.log(`Es palindromo`);
} else {
  console.log(`No es palindromo`);
}
