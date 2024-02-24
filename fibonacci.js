function fibs(nth) {
    let fibArray = [];
    [a, b] = [0, 1];

    for (i = 0; i < nth; i++) {
        fibArray.push(a);
        let c = a + b;
        a = b;
        b = c;
    }
    return fibArray;
}

console.log(fibs(5));

function fibsRec(nth, a = 0, b = 1, fibArray = []) {
    if (nth < 1) return fibArray;
    fibArray.push(a);
    return fibsRec(nth - 1, b, a + b, fibArray);
}

console.log(fibsRec(10))