
const readline = require('readline');
const rl = readline.createInterface({
  //input: fs.createReadStream('sample.txt')
  input:process.stdin,
  output:process.stdout
});
// your code here to initialize the program and take user input
var tampung = [];
rl.on('line', (line) => {

  if(line === ""){
    tampung.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
  console.log(tampung.join(" "));
  //console.log(tampung);
  rl.close();
  }
  tampung.push(line);
});
