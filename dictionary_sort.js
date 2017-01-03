const readline = require('readline');
// your code here to initialize the program and take user input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("Type a word : ");
rl.prompt();
  var arr = [];

rl.on("line", (answer) => {



      if(answer === "")
      {
        rl.close();
        console.log("Congratulation your dictionary has "+arr.length+" word");
        console.log(arr);
        // return console.log(arr.sort().join("-"));;
      }else{

        rl.setPrompt("Type another word (Or PRESS ENTER TO FINISH) : ");
        rl.prompt();
        arr.push(answer);
      }
});
