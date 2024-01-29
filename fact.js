function fact(m) {
    
    if (m === 1) {
        return m;
    }

    return m * fact(m-1);
}

console.log(fact (5));
