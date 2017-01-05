const readline = require('readline');
// your code here to initialize the program and take user input

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.setPrompt("Type a word :");
rl.prompt();

var tampung = [];
var sort = []

rl.on('line', (input) => {
  if (input == "") {
    rl.close();
    console.log(tampung);

    console.log( "Congratulation your dictionary has " + tampung.length + " word");
  } else {
    rl.setPrompt("Type another word ( Or press enter to finish) :");
    rl.prompt();
    tampung.push(input);
  }
});
