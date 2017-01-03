class Dictionary {
  // Your code here to receive user input & sort the array

}

const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdot,
});

var arrayWords = [];
console.log("Type your Words : ");

rl.on('line', (kata) => {
	var arrayTampung = arrayWords.sort(function(a,b){return a.toLowerCase().localeCompare(b.toLowerCase())});
	
  if(kata == ""){
    console.log("Congratulation! your dictionary has " + arrayWords.length + " words");
    for(var i=0; i < arrayTampung.length; i++){
		console.log(arrayTampung[i]);
    }
	console.log(arrayTampung);
    rl.close()
  }
  else{
    arrayWords.push(kata);
    console.log("Type another word : or Enter for finished ");
  }

  });



