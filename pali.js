function pali(cadena, i, d) { //INDICA SI UNA FRASE ES PALINDROMO O NO
    if (i >= d) { //REVISA QUE SE DETENGA LA EJECUCION AL LLEGAR AL CENTRO DE LA FRASE
        return true;
    }

    if (cadena[i] === cadena[d]) { //COMPARA SI EL CARACTER ES IGUAL EN AMBOS LADOS
        i++; //RECORRE DE IZQ A DER
        d--; //RECORRE DE DER A IZQ
        return pali(cadena, i, d);
    } else { //SI UN CARACTER NO FUERA IGUAL RETORNA FALSE Y SE INDICA "NO ES PALINDROMO"
        return false;
    }
}

module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    pali: pali,
};
