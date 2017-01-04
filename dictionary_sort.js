let arrayPrompt = [];

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt('Type a word: ');
rl.prompt();
rl.on('line', (answer) => {
  if(answer === ''){
    console.log(sort(arrayPrompt));
    rl.close();
  }
  else{
    sort(arrayPrompt.push(answer))
    rl.setPrompt('Type another word (or press enter to finish): ');
    rl.prompt();
  }
})

function sort(arr){
  let arrayIndex = [];
  let letter = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'];
  let tampung = 0;
  let sortIndex = [];
  let sortLetter = [];
  let result = [];
  for(let i = 0; i < arr.length; i++){
    arrayIndex.push(letter.indexOf(arr[i][0]));
  }
  while(arrayIndex.length !== 0){
    for(let i = 1; i < arrayIndex.length+1; i++){
      if(tampung === 0){
        tampung = arrayIndex[0];
      }
      if(arrayIndex[i] < tampung){
        tampung = arrayIndex[i];
      }
    }
    sortIndex.push(tampung);
    let getArrayIndex = arrayIndex.indexOf(tampung);
    tampung = 0;
    arrayIndex.splice(getArrayIndex, 1);
  }
  for(let i = 0; i < sortIndex.length; i++){
    sortLetter.push(letter[sortIndex[i]]);
  }

  for(let i = 0; i < sortLetter.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(sortLetter[i] === arr[j][0]){
        result.push(arr[j]);
      }
    }
  }
  return result;
}
