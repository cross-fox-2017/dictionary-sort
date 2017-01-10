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

        for (var i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
                result.push(arr[i])
            } else {
                if (arr[i] > arr[i + 1]) {

                    var tmp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = tmp;

                }
            }
        }
        console.log(arr);
    } else {
        rl.setPrompt('Type another word: (Or PRES ENTER TO FINISH) : ');
        rl.prompt();
        arr.push(input)
    }


});
