const prompt = require('prompt-sync');
const fibo = require('fibo.js');

let n = prompt('Ingresa un numero para el for: ')  


function forRec(n) {
    if (n <= 0) {
      return;
    }
  
    console.log(n);
  

    forRec(n - 1);
  }


  forRec(n);
  

