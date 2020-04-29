
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    for(let digit = 1; digit <= n; digit++){
        if(digit % 3 == 0 && digit % 5 == 0){
            result.push("FizzBuzz");
        } else if (digit % 3 == 0) {
            result.push("Fizz");
        } else if (digit % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(digit.toString());
        }
    }
    return result;
};
