class Dictionary {
}
  // Your code here to receive user input & sort the array
const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdot,
});

var arr = [];
console.log("Input kata : ");

rl.on('line', (kata) => {
	var arrWord = arr.sort(function(a,b){return a.toLowerCase().localeCompare(b.toLowerCase())});
	
  if(kata == ""){
    console.log("Congratulation! " + arr.length + " words");
    for(var i=0; i < arrWord.length; i++){
		console.log(arrWord[i]);
    }
	
	console.log(arrWord);
    rl.close()
  }
  else{
    arr.push(kata);
    console.log("Enter untuk mengakhiri ");
  		}

  	});

