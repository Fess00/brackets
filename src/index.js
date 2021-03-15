module.exports = function check(str, bracketsConfig) {
    let config = new Map(bracketsConfig);
    let right = [];
    let check = [];
    for (let i of str.split('')) {
        if (config.has(i)) {
            check.push(i);
            right.push(config.get(i));
        }
    }
    right.reverse();
    for (let i = 0; i < right.length; i++) {
        if (check[i] !== right[i]) {
            return false;
        }
    }
    return check.length === right.length;
}
