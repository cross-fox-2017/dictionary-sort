// class Dictionary {
//   // Your code here to receive user input & sort the array
//   constructor()
// }
function dictonarySort() {
  // var value = ''
  // for (var i = 0; i < str.length; i++) {
  //   value = arr[i]
  //   for (var j = i-1; value <= j; i++) {
  //     array[i]
  //   }
  // }
  var arr = []
  // arr.sort(function (a,b) {
  //   return b.toLowerCase().localeCompare(a.toLowerCase())
  // })


// console.log(dictonarySort(''));
  const readline = require('readline');
// your code here to initialize the program and take user input

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.setPrompt('Type a Word: ')
  rl.prompt()

  rl.on('line', (input) => {
    if (input == '') {
      rl.close()
    }else {
      rl.setPrompt('Type a Word: ')
      arr.push(input)
      rl.setPrompt('Type another word(or press enter to finish): ')
      rl.prompt()
    }
  }).on('close',() => {
    arr.sort(function (a,b) {
      return a.toLowerCase().localeCompare(b.toLowerCase())
    })
    console.log(`Congratulations! Your dictionary has ${arr.length} words:`);
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i])
    }

  })
}

dictonarySort()
