// const prompt = require('prompt-sync')();


function fibo(n) {
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

// for (let i = 1; i <= n; i++) {
//     console.log(fibo(i));
// }

module.exports = {
    fibo: fibo
}