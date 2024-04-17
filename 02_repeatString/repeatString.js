const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    }
    let myString = '';
    for (i=0; i<times; i++) {
        myString += word;
    }
    return myString;
};

// Do not edit below this line
module.exports = repeatString;
