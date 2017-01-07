const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdot,
});

var arr = [];
console.log("Type a word : ");
rl.on('line', (word) => {
  if(word == ""){
    console.log("Congratulation! your dictionary has " + arr.length + " words");
    for(var i=0; i<arr.length; i++){
      console.log(arr[i]);
    }
    rl.close()
  }
  else{
    arr.push(word);
    console.log("Type another word : ");
  }
  arr.sort(function(a,b){
    return a.toLowerCase()>b.toLowerCase();
  });
});
