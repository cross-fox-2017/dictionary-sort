"use strict"

const readline = require('readline');

function dictionary_sort(arr) {
  var tampung = [];
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log('Masukkan Kata');
    rl.on('line',(input)=>{
      tampung.push(input)
      console.log('Masukkan Kata Lain Atau tekan "ENTER" untuk berhenti');
      if(input==""){
        tampung.sort(function(a,b){
          return a.toLowerCase().localeCompare(b.toLowerCase());
          //localcompare to sort() : Huruf Besar Tidak Akan didahulukan, sistem tetap akan membaca alfabet baik itu huruf besar / huruf kecil
        });
        console.log(`Kata Yang Kamu Masukkan Berjumlah ${tampung.length-1} Kata:`)
        for (var i = 1; i < tampung.length; i++) {
          console.log(tampung[i])
        }
        rl.close();
      }
    })
}

dictionary_sort()
