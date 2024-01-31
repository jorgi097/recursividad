function fact(m) { //DA EL FACTORIAL DE UN NUMERO
    
    if (m === 1) { //AL LLEGAR A UNO SE DETIENE
        return m;
    }

    return m * fact(m-1);
}

module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    fact: fact
}