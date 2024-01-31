function reverse(arr, i, d) { //DADO UN ARRAY DE CARACTERES INVIERTE LA FRASE
    if (i >= d) { //CUANDO LLEGA AL CENTRO DE LA FRASE
        return arr.join(""); //CONVIERTE EL ARRAY EN UN STRING
    }

    if (i < d) { 
        let aux = arr[i];
        arr[i] = arr[d];
        arr[d] = aux;
        return reverse(arr, i + 1, d - 1);
    } else {
        return arr.join(""); //CONVIERTE EL ARRAY EN UN STRING
    }
}

module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    reverse: reverse,
};
