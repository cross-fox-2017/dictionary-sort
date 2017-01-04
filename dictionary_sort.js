const readline = require('readline');
// your code here to initialize the program and take user input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("Type a word : ");
rl.prompt();

  var key = [];
  var result =[];

rl.on("line", (answer) => {

      if(answer === "")
      {

        rl.close();

        console.log("Congratulation your dictionary has "+key.length+" word");
        for(var x = 0; x < key.length;x++){


              if(x === key.length-1)
              {
                console.log('if x === key');
                result.push(key[x]);
              }else{
                console.log('compare');

                if(key[x].toLowerCase() > key[x+1].toLowerCase())
                {
                  var temp = key[x];
                  key[x] = key[x+1];
                  key[x+1] = temp;
                }
              }



        }
          console.log("-"+key);


        // arr.sort(function(a,b){
        //
        //       return a.toLowerCase().localeCompare(b.toLowerCase);
        // })
        //
        //   return console.log(arr.join("-"));
        // return console.log(arr.sort().join("-"));;
      }else{

        rl.setPrompt("Type another word (Or PRESS ENTER TO FINISH) : ");
        rl.prompt();
        key.push(answer);
      }
});
