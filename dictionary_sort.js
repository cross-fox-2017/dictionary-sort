class Dictionary {
  // Your code here to receive user input & sort the array

}

// const readline = require('readline');
// // your code here to initialize the program and take user input
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// var myWord = []
// rl.on('line', (words) => {
//   if (words == ""){
//     rl.close();
//     console.log(myWord);
//     sorting(myWord);
//   } else {
//     myWord.push(words);
//   }
// })

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
    // myWord[i] = myWord[i].split("");
  }
  return myWord
}

console.log(sorting(["siapa", "dia", "aku", "kamu", "kita"]));
