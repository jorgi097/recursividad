function fibo(n) {
    if (n === 1) { 
        return 0;
    }
    if (n === 2) {
        return 1;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    fibo: fibo
}