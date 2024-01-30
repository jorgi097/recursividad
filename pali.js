function pali(cadena, i, d) {
    if (i <= d) {
        console.log("Sali arriba");
        return true;
    }

    if (cadena[i] === cadena[d]) {
        i++;
        console.log("Aumente i");
        d--;
        console.log("Disminui d");
        return pali(cadena, i, d);
    } else {
        console.log("Sali abajo");
        return false;
    }
}

module.exports = {
    pali: pali,
};
