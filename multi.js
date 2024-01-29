function multi(m, n) {
    
    if (n === 1) {
        return m;
    }

    return m + multi(m, n - 1);
}

module.exports = {
    multi: multi
}