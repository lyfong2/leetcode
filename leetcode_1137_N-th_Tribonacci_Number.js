/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    
    let a = 0;
    let b = 1; 
    let c = 1;
    let d;
    let i = 2;
    
    while (i < n) {
        i++;
        d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return c;
};

console.log(tribonacci(25));
// Tribonacci 就是當前的數字 = 前三個數的合
// 每次循環都把最遠(舊)的那筆移走
// Tn+4 = Tn+1 + Tn+2 + Tn+3
// Tn+5 = Tn+2 + Tn+3 + Tn+4



// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
