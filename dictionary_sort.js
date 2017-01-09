const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Input> '
});

rl.prompt();
var arrTmp =[];

rl.on('line', (answer) => {

  arrTmp.push(answer);
  rl.prompt();
  if(answer == ''){
    rl.close();
    console.log(`input of words : ${arrTmp}` )
    console.log('Output> Sort result:',Dictionary(answer));
  }
})

function Dictionary(answer){
  arrTmp.sort(function(asc, desc){return asc.localeCompare(desc)})//localeCompare mengabaikan inputan lowercase atau uppercase
  return arrTmp.join().replace(/\D/,'');
}
