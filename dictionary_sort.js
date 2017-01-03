class Dictionary {
  // Your code here to receive user input & sort the array

}

const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var myWord = []
rl.on('line', (words) => {
  if (words != "/n"){
    myWord.push(words)
  } else {
    rl.close
  }
})
