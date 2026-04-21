const sumAll = function(a, b) {
    
    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b) )
    return "ERROR";

    if (a > b) {
        [a, b] = [b, a]
    }

    let finalSum = 0;

    for (i = a; i <= b; i++){
        finalSum += i;
    }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
