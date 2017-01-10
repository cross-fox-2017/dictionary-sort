const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.setPrompt('Input kata : ')
rl.prompt();

let arrWords = []
rl.on('line', (words) => {
  rl.prompt()
  if (words == '') {
    rl.close();
    arrWords.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    console.log(arrWords);
  }
arrWords.push(words)
})
