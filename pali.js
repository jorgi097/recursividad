valor = "anita lava la tina";

function pali(cadena, i, d) {
    if (i >= d) {
        return true;
    }

    if (cadena[i] === cadena[d]) {
        i++;
        d--;
        return pali(cadena, i, d);
    } else {
        return false;
    }
}

console.log(pali(valor, 0, valor.length - 1));  
