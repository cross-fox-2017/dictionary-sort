const readline = require('readline');
// your code here to initialize the program and take user input

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.setPrompt("Type a word :");
rl.prompt();

var arr = [];
var sort = []

rl.on('line', (input) => {
  if (input == "") {
  rl.close();
  
  for ( var i = 0; i < arr.length; i++ ) {
    let smallest = i;

    for ( var j = i + 1; j < arr.length; j++) {
      if (arr[j] <  arr[smallest]) {
        smallest = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp
  }

    console.log(arr);
    console.log( "Congratulation your dictionary has " + arr.length + " word");
  } else {
    rl.setPrompt("Type another word ( Or press enter to finish) :");
    rl.prompt();
    arr.push(input);
  }
});
