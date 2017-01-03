class Dictionary {
  // Your code here to receive user input & sort the array

}

const readline = require('readline');
// // your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt(`Silahkan masukkan kata baru \n`)
var myWord = []
rl.prompt()
rl.on('line', (words) => {
  rl.prompt()
  if (words == ""){
    rl.close();
    console.log(myWord);
    console.log(sorting(myWord));
  } else {
    myWord.push(words.toLowerCase());
  }
})

function sorting(myWord){
  var temp = ""
  for (var i = 0; i < myWord.length; i++) {
    for (var j = 0; j < myWord[i].length; j++) {
      if (myWord[i] < myWord[j]){
        temp = myWord[j]
        myWord[j] = myWord[i]
        myWord[i] = temp
      }
    }
  }
  return myWord
}

// console.log(sorting(["siapa", "dia", "aku", "kamu", "kita"]));
