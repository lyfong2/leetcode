/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    if (n === 0) return res;
    helper(res, '', n, n);
    return res;
};


let helper = (res, s, left, right) =>{
    if(left > right){
        return;
    }
    if (left === 0 && right === 0){
        res.push(s);
        return;
    }
    if (left > 0){
        helper(res, s + "(", left - 1, right);
    }
    if (right > 0){
        helper(res, s + ")", left, right - 1);
    }
}
