const division = require("./div");
const factorial = require("./fact");
const fibonacci = require("./fibo");
const multiplicacion = require("./multi");
const palindromo = require("./pali");
const potencia = require("./pot");
const potenciaMultiplicacion = require("./pot con multi");
const reverse = require("./reverse");
const sumatoria = require("./sum");
const prompt = require("prompt-sync")();

let menuResponse = undefined;

let menuoptions = [
    "Factorial",
    "Sumatoria",
    "Potencia",
    "Multiplicacion",
    "Division con restas",
    "Potencia con multiplicacion",
    "Es palindromo?",
    "Invertir palabra",
    "Hannoi",
    "For recursivo",
    "Fibonacci",
];

function clearPrint(opt) {
    console.clear();
    console.log(`${menuoptions[opt - 1]}\n`);
}

function printMenu() {
    console.log("MENU\n");

    console.log("0) para salir");

    for (let i = 0; i < menuoptions.length; i++) {
        console.log(`${i + 1}) ${menuoptions[i]}`);
    }

    menuResponse = parseInt(prompt("Ingrese la opción deseada: "));
}

printMenu();

switch (menuResponse) {
    case 1:
        clearPrint(menuResponse);
        const factResponse = parseInt(
            prompt("Ingresa un numero para darte el factorial: ")
        );
        const factResult = factorial.fact(factResponse);
        console.log(factResult);
        break;

    case 2:
        clearPrint(menuResponse);
        const sumResponse = parseInt(
            prompt("Ingresa un numero para darte la sumatoria: ")
        );
        const sumResult = sumatoria.sum(sumResponse);
        console.log(sumResult);
        break;

    case 3:
        clearPrint(menuResponse);
        const numPot1 = parseInt(prompt("Ingresa la base: "));
        const numPot2 = parseInt(prompt("Ingresa el exponente: "));
        const potResult = potencia.pot(numPot1, numPot2);
        console.log(potResult);
        break;

    case 4:
        clearPrint(menuResponse);
        const numMulti1 = parseInt(prompt("Ingresa el primer digito a multiplicar: "));
        const numMulti2 = parseInt(prompt("Ingresa el segundo digito a multiplicar: "));
        const multiResult = multiplicacion.multi(numMulti1, numMulti2);
        console.log(multiResult);
        break;

    case 5:
        clearPrint(menuResponse);
        const numDiv1 = parseInt(prompt("Ingresa el dividendo: "));
        const numDiv2 = parseInt(prompt("Ingresa el divisor: "));
        const divResult = division.div(numDiv1, numDiv2);
        console.log(divResult);
        break;

    case 6:
        clearPrint(menuResponse);
        const numPotMulti1 = parseInt(prompt("Ingresa la base: "));
        const numPotMulti2 = parseInt(prompt("Ingresa el exponente: "));
        const potMultiResult = potenciaMultiplicacion.potmulti(numPotMulti1, numPotMulti2);
        console.log(potMultiResult);
        break;

    case 7:
        clearPrint(menuResponse);
            
        break;

    case 8:
        clearPrint(menuResponse);

        break;

    case 9:
        clearPrint(menuResponse);

        break;

    case 10:
        clearPrint(menuResponse);

        break;


    default:
        break;
}
