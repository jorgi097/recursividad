function multi(m, n) {
    
    if (n === 1) {
        return m;
    }

    return m + multi(m, n - 1);
}

function pot(x, y) {
    
    if (y === 0) {
        return 1;
    }

    return multi (x, pot(x, y - 1));
}

console.log(pot(5, 2));