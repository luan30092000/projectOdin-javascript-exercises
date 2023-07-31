const repeatString = function(content, n) {
    if (n < 0) {
        return "ERROR";
    }
    if (n == 0) {
        return "";
    }
    let result = content;
    for (let i = 0; i < n - 1; i++) {
        result += content;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
