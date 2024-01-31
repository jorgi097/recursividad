//IMPORTA LAS FUNCIONES DE CADA ARCHIVO
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
const hanoi = require("./hanoi");
const prompt = require("prompt-sync")(); //LIBRERIA QUE PERMITE USAR PROMT("FRASE"); PARA OBTENER INPUT DEL USUARIO

let menuResponse = undefined; //RESPUESTA DEL MENU PRINCIPAL

let menuoptions = [ //ARRAY CON LAS OPCIONES DEL MENU PRINCIPAL
    "Factorial",
    "Sumatoria",
    "Potencia",
    "Multiplicacion",
    "Division Con Restas",
    "Potencia Con Multiplicacion",
    "Es Palindromo?",
    "Invertir Frase",
    "Hannoi",
    "For Recursivo",
    "Fibonacci",
];

console.clear(); //LIMPIA LA CONSOLA

function clearPrint(opt) { //LIMPIA LA CONSOLA Y DESPUES IMPRIME EL TITULO DE LA OPCION ELEGIDA
    console.clear();
    console.log(`${menuoptions[opt - 1]}\n`);
}

function printMenu() { 
    console.log("MENU\n");

    console.log("0) Salir");

    for (let i = 0; i < menuoptions.length; i++) { //IMPRIME EL MENU PRINCIPAL USANDO EL ARRAY DE OPCIONES
        console.log(`${i + 1}) ${menuoptions[i]}`);
    }
    console.log("");
    menuResponse = parseInt(prompt("Ingrese la opción deseada: "));
}

while (true) { //HACE QUE AL FINALIZAR UN PROGRAMA RETORNE AL MENU RINCIPAL
    printMenu();

    switch (menuResponse) {
        case 0:
            console.log("Saliendo...");
            return; //SALE DEL PROGRAMA

        case 1: //Factorial
            clearPrint(menuResponse);
            const factResponse = parseInt(
                prompt("Ingresa un numero para darte el factorial: ")
            );
            const factResult = factorial.fact(factResponse); //LLAMADA AL MODULO IMPORTADO CON LA FUNCION FACTORIAL
            console.log(`\nEl factorial de ${factResponse} es: ${factResult}`); //IMPRIME EL RESULTADO
            break;

        case 2: //Sumatoria
            clearPrint(menuResponse);
            const sumResponse = parseInt(
                prompt("Ingresa un numero para darte la sumatoria: ")
            );
            const sumResult = sumatoria.sum(sumResponse); //LLAMADA AL MODULO IMPORTADO CON LA FUNCION SUMATORIA
            console.log(`\nLa sumatoria de ${sumResponse} es: ${sumResult}`); //IMPRIME EL RESULTADO
            break;

        case 3: //Potencia
            clearPrint(menuResponse);
            const numPot1 = parseInt(prompt("Ingresa la base: "));
            const numPot2 = parseInt(prompt("Ingresa el exponente: "));
            const potResult = potencia.pot(numPot1, numPot2); //LLAMADA AL MODULO IMPORTADO CON LA FUNCION POTENCIA
            console.log(`\n${numPot1} elevado a ${numPot2} = ${potResult}`); //IMPRIME EL RESULTADO
            break;

        case 4: //Multiplicación
            clearPrint(menuResponse);
            const numMulti1 = parseInt(
                prompt("Ingresa el primer digito a multiplicar: ")
            );
            const numMulti2 = parseInt(
                prompt("Ingresa el segundo digito a multiplicar: ")
            );
            const multiResult = multiplicacion.multi(numMulti1, numMulti2); //LLAMADA AL MODULO IMPORTADO CON LA FUNCION MULTIPLICAR
            console.log(`\n${numMulti1} * ${numMulti2} = ${multiResult}`); //IMPRIME EL RESULTADO
            break;

        case 5: //Division
            clearPrint(menuResponse);
            const numDiv1 = parseInt(prompt("Ingresa el dividendo: "));
            const numDiv2 = parseInt(prompt("Ingresa el divisor: "));
            const divResult = division.div(numDiv1, numDiv2); //LLAMADA AL MODULO IMPORTADO CON LA FUNCION DIVISON
            console.log(`\n${numDiv1} / ${numDiv2} = ${divResult}`); //IMPRIME EL RESULTADO
            break;

        case 6: //Potencia con multiplicación
            clearPrint(menuResponse);
            const numPotMulti1 = parseInt(prompt("Ingresa la base: "));
            const numPotMulti2 = parseInt(prompt("Ingresa el exponente: "));
            const potMultiResult = potenciaMultiplicacion.potmulti(
                numPotMulti1,
                numPotMulti2
            ); //LLAMADA AL MODULO IMPORTADO CON LA FUNCION POTENCIAMULTIPLICACION
            console.log(
                `\n${numPotMulti1} elevado a ${numPotMulti2} = ${potMultiResult}`
            ); //IMPRIME EL RESULTADO
            break;

        case 7: //Palindromo
            clearPrint(menuResponse);
            const paliResponse = prompt(
                "Ingresa una frase para saber si es palíndroma: "
            );
            //ELIMINA ESPACIOS Y CONVIERTE A MINUSCULA
            const paliResponseMin = paliResponse
                .replace(/\s/g, "")
                .toLowerCase();
            const paliResponseMinLen = paliResponseMin.length - 1;
            const paliResult = palindromo.pali(
                paliResponseMin,
                0,
                paliResponseMinLen
            ); //LLAMADA AL MODULO IMPORTADO CON LA FUNCION PALINDROMO
            if (paliResult) { //IMPRIME EL RESULTADO DPENDIENDO DE SI RETORNA TRUE O FALSE
                console.log(`\n${paliResponse} es palíndromo`);
            } else {
                console.log(`\n${paliResponse} no es palíndromo`);
            }
            break;

        case 8: //Invertir
            clearPrint(menuResponse);
            const reverseResponse = prompt(
                "Ingresa una frase para invertirla: "
            );
            const reverseResponseArray = reverseResponse.split("");
            const reverseResponseArrayLen = reverseResponseArray.length - 1;
            const reverseResult = reverse.reverse(
                reverseResponseArray,
                0,
                reverseResponseArrayLen
            ); //LLAMADA AL MODULO IMPORTADO CON LA FUNCION REVERSE
            console.log(`\nTu frase invertida es: ${reverseResult}`); //IMPRIME EL RESULTADO
            break;

        case 9: //Hanoi
            clearPrint(menuResponse);
            const hanoiResponse = parseInt(prompt(
                "Ingresa cuantos aros tendra la torre de origen: "
            ));
            const hanoiResult = hanoi.hanoi(hanoiResponse, "A", "C", "B"); //LLAMADA AL MODULO IMPORTADO CON LA FUNCION HANOI
            break;

        case 10: //For
            clearPrint(menuResponse);
            console.log(
                "Esta funcion detecta automaticamente si es incremental o decremental\n"
            );
            const inicio = parseInt(
                prompt("Dime en que numero inicia tu For Recursivo: ")
            );
            const final = parseInt(
                prompt("Dime cuando finaliza tu For Recursivo: ")
            );
            const cambio = parseInt(
                prompt(
                    "Dime cuanto va a cambiar en cada iteración (lo que equivale en un for a: i++, i+2, i-3, etc): "
                )
            );

            if (inicio < final) { //DETECTA SI EL CICLO ES INCREMENTAL 
                // Caso incremental
                forRecursivo.forRecPlus(inicio, final, cambio, (valor) => { //LLAMADA AL MODULO IMPORTADO CON LA FUNCION FOR INCREMENTAL
                    console.log(valor);
                });
            } else if (inicio > final) { //DETECTA SI EL CASO ES DECREMENTAL
                //Caso decremental
                forRecursivo.forRecMinus(inicio, final, cambio, (valor) => { //LLAMADA AL MODULO IMPORTADO CON LA FUNCION FOR DECREMENTAL
                    console.log(valor);
                });
            } else { //EVITA ERRORES
                console.log("Parametros no validos");
            }
            break;

        case 11: //Fibonacci
            clearPrint(menuResponse);
            const fiboResponse = parseInt(
                prompt(
                    "Ingresa un numero para calcular la seuencia de fibonacci: "
                )
            );
            forRecursivo.forRecPlus(1, fiboResponse, 1, (ini) => { //LLAMADA AL MODULO IMPORTADO CON LA FUNCION FIBONACCI
                //Uso de for en versión recursiva
                console.log(fibonacci.fibo(ini));
            });
            break;

        default:
            break;
    }

    let continuar = prompt("\n¿Desea regresar al menú principal?  Y/N: ");
    if (continuar.toLowerCase() === "n") { //CONIERTE A MINUSCULAS LA RESPUESTA
        console.log("Saliendo...");
        return; //SALE DEL PROGRAMA
    } else if (continuar.toLowerCase() === "y") {
        console.clear(); //LIMPIA LA CONSOLA Y EL WHILE REPITE EL MENU
    }
}
