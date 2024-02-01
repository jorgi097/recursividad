const prompt = require("prompt-sync")();

console.clear();
console.log("MAXIMO COMUN DIVISOR\n");

function mcd(n, m) {
    if (m <= n && n % m === 0) {
        return m;
    } else if (n < m) {
        return mcd(m, n);
    } else {
        return mcd(m, n % m);
    }
}

const valor1 = prompt("Ingresa valor 1: ");
const valor2 = prompt("Ingresa valor 2: ");

const resultadoMCD = mcd(valor1, valor2);
console.log(`El MCD de ${valor1} y ${valor2} es ${resultadoMCD}`);