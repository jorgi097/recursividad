let valorReverse = ["u", "n", "i", "v", "e", "r", "s", "i", "d", "a", "d"];
let iReverse = 0;
let dReverse = valorReverse.length - 1;
let auxReverse = undefined;

function reverse(arr) {
    if (iReverse >= dReverse) {
        return arr.join('');
    }

    if (iReverse < dReverse) {
        auxReverse = arr[iReverse];
        arr[iReverse] = arr[dReverse];
        arr[dReverse] = auxReverse;
        iReverse++;
        dReverse--;
        return reverse(arr);
    } else {;
        return arr.joiReversen('');
    }
}

let reversedArray = reverse(valorReverse);
console.log(reversedArray);


module.exports = {
    reverse: reverse,
    valorReverse: valorReverse,
    iReverse: iReverse,
    dReverse: dReverse,
    auxReverse: auxReverse
}