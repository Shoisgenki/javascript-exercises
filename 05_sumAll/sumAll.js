const sumAll = function(a, b) {
    var c = 0;
        if (a & b > 0) {
        if (b>a) {
            for (i=a; i<=b; i++) {
                c = c + i;
            }
        }
        else if (a>b) {
            for (i=a; i>=b; i--) {
                c = c + i;
            }
        }
    }
    else return "ERROR";
    return c;
};

// Do not edit below this line
module.exports = sumAll;
