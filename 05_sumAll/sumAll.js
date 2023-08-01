const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    if (num1 === num2) {
        return num1;
    }
    let start = num1, finish = num2, result = 0;
    if (num1 > num2) {
        start = num2;
        finish = num1;
    }
    for (let i = start; i <= finish; i++) {
        result += i;
    }
    return result;
}

// Do not edit below this line
module.exports = sumAll;
