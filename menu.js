const prompt = require("prompt-sync")();

let response = undefined;

let menuoptions = [
    "Factorial",
    "Sumatoria",
    "Potencia",
    "Multiplicacion",
    "Division con restas",
    "Potencia con multiplicacion",
    "Invertir palabra",
    "Es palindromo?",
    "Fibonacci",
    "Hannoi",
];


printMenu();


function printMenu() {
    console.log("MENU\n");

    console.log("0) para salir");

    for (let i = 0; i < menuoptions.length; i++) {
        console.log(`${i + 1}) ${menuoptions[i]}`);
    }

    response = prompt("");
}

if (response == 1) {
    let answer = prompt("Ingresa el numero para obtener factorial: ");
    console.log(fact(answer));
}else

if( response == 2){
    let answer2 = prompt("Ingresa el numero para obtener la sumatoria: ");
    console.log(sum(answer2));
}else

if( response == 3){
    let answer3 = prompt("Ingresa la base: ");
    let answer4 = prompt("Ingresa el exponente: ");
    console.log(pot(answer3, answer4));
}




function fact(m) {
    if (m === 1) {
        return m;
    }

    return m * fact(m - 1);
}

function sum(m) {
    
    if (m === 1) {
        return m;
    }

    return m + sum(m-1);
}

function pot(m, n) {
    
    if (n === 0) {
        return 1;
    }

    return m * pot(m, n - 1);
}