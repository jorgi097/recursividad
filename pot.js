function pot(m, n) { //OBTIENE LA POTENCIA
    
    if (n === 0) { //UN NUMERO ELEVADO A 0 DA 1
        return 1;
    }

    return m * pot(m, n - 1);
}


module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    pot: pot
}