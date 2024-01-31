function multi(m, n) { //MULTIPLICA DOS DIGITOS USANDO SUMAS
    
    if (n === 1) { //UN NUMERO MULTIPLICADO POR UNO DA EL MISMO NUMERO
        return m;
    }

    return m + multi(m, n - 1);
}

module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    multi: multi
}