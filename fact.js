function fact(m) {
    
    if (m === 1) {
        return m;
    }

    return m * fact(m-1);
}

module.exports = {
    fact: fact
}