function sum(m) {
    
    if (m === 1) {
        return m;
    }

    return m + sum(m-1);
}

console.log(sum(5));