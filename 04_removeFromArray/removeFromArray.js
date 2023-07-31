const removeFromArray1 = function(array, ...args ) {
    return array.filter((element) => (!args.includes(element)));
};

const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; i++) {
        let index = array.indexOf(args.at(i));
        if (index != -1) {
            array.splice(index, 1);
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
