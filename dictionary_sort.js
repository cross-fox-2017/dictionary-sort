"use strict"

// class Dictionary {
//   // Your code here to receive user input & sort the array
//
// }

let arrayInput = [];
let hasil = [];
const readline = require('readline');
// your code here to initialize the program and take user input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt('Type a word: ');
rl.prompt();
rl.on('line', (answer) => {
  if(answer === ''){
    console.log(`Congratulations! Your dictionary has ${arrayInput.length} words`);
    arrayInput.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    for (var i = 0; i < arrayInput.length; i++) {
      console.log(arrayInput[i]);
    }
    rl.close();
  }
  else{
    arrayInput.push(answer)
    rl.setPrompt('Type another word (or press enter to finish): ');
    rl.prompt();
  }
})
