function sum(m) { //OBTIENE LA SUMATORIA HASTA UN NUMERO DADO
    
    if (m === 1) { //AL LLEGAR A 1 SE DETIENE
        return m;
    }

    return m + sum(m-1);
}


module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    sum: sum
}