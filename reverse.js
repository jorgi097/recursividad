let valor = "universidad";
let i = 0;
let d = valor.length - 1;
let aux = undefined;

let valorarray = valor.split('');  // Create a copy of the array

function reverse(cadena) {
    if (i >= d) {
        return cadena.join('');
    }

    if (cadena[i] === cadena[d]) {
        aux = cadena[i];
        cadena[i] = cadena[d];
        cadena[d] = aux;
        i++;
        d--;
        return reverse(cadena);  // Return the result of the recursive call
    } else {
        return cadena.join(''); // Add a return statement for the recursive case
    }
}

let reversedString = reverse(valorarray);
console.log(reversedString);
