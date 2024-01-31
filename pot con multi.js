const multiplicacion = require("./multi"); //IMPORTA LA FUNCION MULTIPLICAR PARA SER USADA POR POTMULTI

function potmulti(m, n) { //OBTIENE LA POTENCIA USANDO A LA FUNCION MULTIPLICAR
    if (n === 0) { //UN NUMERO ELEVADO A 0 DA 1
        return 1;
    }

    return multiplicacion.multi(m, potmulti(m, n - 1)); //LLAMADA AL MODULO IMPORTADO CON LA FUNCION MULTIPLICAR
}

module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    potmulti: potmulti,
};
