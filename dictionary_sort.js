const readline = require('readline');
// your code here to initialize the program and take user input

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('Type a word: ');
rl.prompt();

var arr = [];
var result = []

rl.on('line', (input) => {
    if (input == '') {
        rl.close()

        console.log('Congratulation your dictionary has ' + arr.length + ' word');

        arr.sort(function(a,b) {
          return a.toLowerCase().localeCompare(b.toLowerCase())
        })

        for (var i = 0; i < arr.length; i++) {
          console.log(arr[i]);
        }

    } else {
        rl.setPrompt('Type another word: (Or PRES ENTER TO FINISH) : ');
        rl.prompt();
        arr.push(input)
    }
});
