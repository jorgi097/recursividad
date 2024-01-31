const division = require("./div");
const factorial = require("./fact");
const fibonacci = require("./fibo");
const multiplicacion = require("./multi");
const palindromo = require("./pali");
const potencia = require("./pot");
const potenciaMultiplicacion = require("./pot con multi");
const reverse = require("./reverse");
const sumatoria = require("./sum");
const forRecursivo = require("./forRecursivo");
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

    menuResponse = parseInt(prompt("\nIngrese la opción deseada: "));
}
do {
    printMenu();

    switch (menuResponse) {
        case 1: //Factorial
            clearPrint(menuResponse);
            const factResponse = parseInt(
                prompt("Ingresa un numero para darte el factorial: ")
            );
            const factResult = factorial.fact(factResponse);
            console.log(`\nEl factorial de ${factResponse} es: ${factResult}`);
            break;

        case 2: //Sumatoria
            clearPrint(menuResponse);
            const sumResponse = parseInt(
                prompt("Ingresa un numero para darte la sumatoria: ")
            );
            const sumResult = sumatoria.sum(sumResponse);
            console.log(`\nLa sumatoria de ${sumResponse} es: ${sumResult}`);
            break;

        case 3: //Potencia
            clearPrint(menuResponse);
            const numPot1 = parseInt(prompt("Ingresa la base: "));
            const numPot2 = parseInt(prompt("Ingresa el exponente: "));
            const potResult = potencia.pot(numPot1, numPot2);
            console.log(`\n${numPot1} elevado a ${numPot2} = ${potResult}`);
            break;

        case 4: //Multiplicación
            clearPrint(menuResponse);
            const numMulti1 = parseInt(
                prompt("Ingresa el primer digito a multiplicar: ")
            );
            const numMulti2 = parseInt(
                prompt("Ingresa el segundo digito a multiplicar: ")
            );
            const multiResult = multiplicacion.multi(numMulti1, numMulti2);
            console.log(`\n${numMulti1} * ${numMulti2} = ${multiResult}`);
            break;

        case 5: //Division
            clearPrint(menuResponse);
            const numDiv1 = parseInt(prompt("Ingresa el dividendo: "));
            const numDiv2 = parseInt(prompt("Ingresa el divisor: "));
            const divResult = division.div(numDiv1, numDiv2);
            console.log(`\n${numDiv1} / ${numDiv2} = ${divResult}`);
            break;

        case 6: //Potencia con multiplicación
            clearPrint(menuResponse);
            const numPotMulti1 = parseInt(prompt("Ingresa la base: "));
            const numPotMulti2 = parseInt(prompt("Ingresa el exponente: "));
            const potMultiResult = potenciaMultiplicacion.potmulti(
                numPotMulti1,
                numPotMulti2
            );
            console.log(
                `\n${numPotMulti1} elevado a ${numPotMulti2} = ${potMultiResult}`
            );
            break;

        case 7: //Palindromo
            clearPrint(menuResponse);
            const paliResponse = prompt(
                "Ingresa una frase para saber si es palíndroma: "
            );
            // Elimina espacios y convierte a minúsculas
            const paliResponseMin = paliResponse
                .replace(/\s/g, "")
                .toLowerCase();
            const paliResponseMinLen = paliResponseMin.length - 1;
            const paliResult = palindromo.pali(
                paliResponseMin,
                0,
                paliResponseMinLen
            );
            if (paliResult) {
                console.log(`\n${paliResponse} es palíndroma`);
            } else {
                console.log(`\n${paliResponse} no es palíndroma`);
            }
            break;

        case 8: //Invertir
            clearPrint(menuResponse);
            const reverseResponse = prompt(
                "Ingresa una palabra para invertirla: "
            );
            const reverseResponseArray = reverseResponse.split("");
            const reverseResponseArrayLen = reverseResponseArray.length - 1;
            const reverseResult = reverse.reverse(
                reverseResponseArray,
                0,
                reverseResponseArrayLen
            );
            console.log(`\nTu palabra invertida es: ${reverseResult}`);
            break;

        case 9: //Hanoi
            clearPrint(menuResponse);

            break;

        case 10: //For
            clearPrint(menuResponse);

            break;

        // Planteamiento: Dado un número n de aros, indicar los movimientos que hay que hacer para resolver el problema de las Torres de Hanoi.

        // Planteamiento: Implementar, con recursividad, una función que haga lo mismo que un ciclo for.

        // Planteamiento: Dado un número n, desplegar los primeros n números de la serie de Fobonacci.

        // Ejemplo: sea n = 6
        // Se desplegará: 0, 1, 1, 2, 3, 5
        // Si necesita utilizar un ciclo for, utilice la función del planteamiento anterior.

        case 11: //Fibonacci
            clearPrint(menuResponse);
            const fiboResponse = parseInt(
                prompt(
                    "Ingresa un numero para calcular la seuencia de fibonacci: "
                )
            );
            forRecursivo.forRecPlus(1, fiboResponse, 1, (ini) => {
                console.log(fibonacci.fibo(ini));
            });
            break;

        default:
            break;
    }

    let continuar = prompt("\n¿Desea regresar al menú principal? y/n: ");
    if (continuar.toLowerCase() === "n") {
        console.log("Saliendo...");
        menuResponse = 0;
    } else if (continuar.toLowerCase() === "y") {
        console.clear();
    }
} while (menuResponse != 0);
