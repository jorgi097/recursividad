function div(m, n) {
    if (m < n) {
        return m;
    } else {
        return 1 + div(m - n, n);
    }
}

module.exports = {
    div: div,
};
