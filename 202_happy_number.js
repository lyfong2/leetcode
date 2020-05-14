/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {    
    const seen = {};
    
    while (n != 1){
        if(seen[n] === n){
            return false;
        }else{
            seen[n] = n;
            n = n.toString().split('').reduce((acc, num) =>  acc + num * num, 0);
        }
    }
    return true;
};
