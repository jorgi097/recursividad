function pot(m, n) {
    
    if (n === 0) {
        return 1;
    }

    return m * pot(m, n - 1);
}

console.log(pot(5,3));