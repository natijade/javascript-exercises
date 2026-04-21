const repeatString = function repeatString(string, num) {

    if (num < 0)
        return "ERROR";

    let result = ""

        for (let i = num; i > 0; i--){
            result += string
        }
        return result;
    };

// Do not edit below this line
module.exports = repeatString;
