function pot(m, n) {
    
    if (n === 0) {
        return 1;
    }

    return m * pot(m, n - 1);
}


module.exports = {
    pot: pot
}