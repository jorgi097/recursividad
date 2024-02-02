const prompt = require("prompt-sync")(); //LIBRERIA QUE PERMITE USAR PROMT("FRASE"); PARA OBTENER INPUT DEL USUARIO
const factorial = require("./fact");
const potencia = require("./pot");
console.clear();
let x = prompt("Ingresa el valor de x: ");
let n = prompt("Ingresa el valor de n: ") ;

function taylor(x, n) {
    if (n == 1) {
        return 1;
    }
    return potencia.pot(x, n-1) / factorial.fact(n-1) + taylor(x, n - 1);
}

console.log(taylor(x, n));
