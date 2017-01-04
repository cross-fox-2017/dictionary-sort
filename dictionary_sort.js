var arr=[];

function dictionary(array){
  array.sort(function (a,b){
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
}
function susun(arra){
  var list=''
  for(var i=0;i< arra.length;i++){
    list += arra[i]+ '\n';
  }
  return list;
}

const readline = require('readline');
const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout,
  prompt: 'Type a word:  '
});

rl.prompt();

rl.on('line', (line) => {


  if(line===''){
    rl.close();

  }
  else{
  arr.push(line);
  }
rl.prompt();

}).on('close', () => {
  dictionary(arr);
  console.log(`congratulations! your dictionary has  ${arr.length} words \n${susun(arr)}`);
  process.exit(0);
});
