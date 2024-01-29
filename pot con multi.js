const multiplicacion = require("./multi");

function potmulti(m, n) {
    if (n === 0) {
        return 1;
    }

    return multiplicacion.multi(m, potmulti(m, n - 1));
}

module.exports = {
    potmulti: potmulti,
};
