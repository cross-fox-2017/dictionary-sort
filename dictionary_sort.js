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
    console.log('kata-kata yang ter-input : \n' + arrWords)
    console.log('kata-kata telah tersortir! : \n' + dictionary(words));
  }
  else {
    arrWords.push(words.toLowerCase());
  }
})

function dictionary (words) {
  let hold = ''
  for (let i = 0; i < arrWords.length; i++) {
    for (let j = 0; j < arrWords[i].length; j++) {
      if (arrWords[i] < arrWords[j]) {
        hold = arrWords[j]
        arrWords[j] = arrWords[i]
        arrWords[i] = hold
      }
    }
  }
  return arrWords
}
