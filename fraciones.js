const prompt = require("prompt-sync")();
const division = require("./div");
const multiplicacion = require("./multi");


console.clear();

function mcd(n, m) { //OBTIENE EL MAXIMO COMUN DIVISOR
    if (m <= n && n % m === 0) {
        return m;
    } else if (n < m) {
        return mcd(m, n);
    } else {
        return mcd(m, n % m);
    }
}

function realizarOperacion(frac1, operador, frac2) {
    const [num1, den1] = frac1; //FRAC1 ES UN ARREGLO DE DOS ELEMENTOS Y SE ASIGNAN EN ORDEN A LAS VARIABLES NUM1 Y DEN1
    const [num2, den2] = frac2; //FRAC2 ES UN ARREGLO DE DOS ELEMENTOS Y SE ASIGNAN EN ORDEN A LAS VARIABLES NUM2 Y DEN2

    let resultadoNum, resultadoDen; //VARIABLES VACIAS


    if (operador === "+") { //SI ES SUMA
        resultadoNum = multiplicacion.multi(num1, den2) + multiplicacion.multi(num2, den1); //OBTIENE DE CADA FRACCION EL NUMERADOR CON EL NUEVO DENOMINADOR Y LAS SUMA
        resultadoDen = multiplicacion.multi(den1, den2); //MULTIPLICA DENOMINADORES PARA QUE SEAN IGUALES

    } else if (operador === "-") { //SI ES RESTA 
        resultadoNum =  multiplicacion.multi(num1, den2) - multiplicacion.multi(num2, den1); //OBTIENE DE CADA FRACCION EL NUMERADOR CON EL NUEVO DENOMINADOR Y LAS RESTA
        resultadoDen = multiplicacion.multi(den1, den2); //MULTIPLICA DENOMINADORES PARA QUE SEAN IGUALES

    } else if (operador === "*") { //SI ES MULTIPLICACION
        resultadoNum = multiplicacion.multi(num1, num2); //MULTIPLICA NUMERADORES
        resultadoDen = multiplicacion.multi(den1, den2); //MULTIPLICA DENOMINADORES

    } else if (operador === "/") {
        resultadoNum = num1 * den2; //MULTIPLICA NUMERADOR1 POR DENOMINADOR2 PARA OBTENER EL NUMERADOR DE LA DIVISION
        resultadoDen = den1 * num2; //MULTIPLICA DENOMINADOR1 POR NUMERADOR2 PARA OBTENER EL DENOMINADOR DE LA DIVISION

    } else {
        console.log("Operador no válido.");
        return;
    }

    //SIMPLIFICA EL RESULTADO DIVIDIENDO POR EL MÁXIMO COMÚN DIVISOR
    const maximoComunDivisor = mcd(resultadoNum, resultadoDen); 
    resultadoNum = division.div(resultadoNum, maximoComunDivisor); //DIVIDE EL NUMERADOR P<OR EL MCD PARA OBTENER EL NUMERADOR SIMPLIFICADO
    resultadoDen = division.div(resultadoDen, maximoComunDivisor); //DIVIDE EL DENOMINADOR POR EL MCD PARA OBTENER EL DENOMINADOR SIMPLIFICADO

    console.log(`Resultado: ${resultadoNum}/${resultadoDen}`);
}




const inputFrac1 = prompt(
    'Ingrese la primera fracción en formato "numerador/denominador": '
);
console.log("");
const operador = prompt("Ingrese el operador (+, -, *, /): ");
console.log("");
const inputFrac2 = prompt(
    'Ingrese la segunda fracción en formato "numerador/denominador": '
);
console.log("");

// Convertir las cadenas de entrada en arreglos de números
const frac1 = inputFrac1.split("/").map(Number);
const frac2 = inputFrac2.split("/").map(Number);




realizarOperacion(frac1, operador, frac2);
