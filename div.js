function div(m, n) { //DIVIDE 2 NUMEROS CON REISDUO 0 USANDO RESTAS
    if (m < n) { //SI EL DIIDENDO ES MENOR QUE EL DIVISOR SE TERMINA LA EJECUCIÓN
        return m;
    } else {
        return 1 + div(m - n, n);
    }
}

module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    div: div,
};
