function fact(m) { //DA EL FACTORIAL DE UN NUMERO
    
    if (m === 1) { //UN NUMERO MUTIPLICADO POR 1 DA ESE MISMO NUMERO
        return m;
    }

    return m * fact(m-1);
}

module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    fact: fact
}