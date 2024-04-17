const reverseString = function(word) {
    let newStr = ''
    for (i = word.length - 1; i>=0; i--) {
        let char = word.slice(i, i+1);
        newStr += char;
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
