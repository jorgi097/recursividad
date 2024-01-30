function reverse(arr, i, d) {
    if (i >= d) {
        return arr.join("");
    }

    if (i < d) {
        let aux = arr[i];
        arr[i] = arr[d];
        arr[d] = aux;
        return reverse(arr, i + 1, d - 1);
    } else {
        return arr.join("");
    }
}

module.exports = {
    reverse: reverse,
};
