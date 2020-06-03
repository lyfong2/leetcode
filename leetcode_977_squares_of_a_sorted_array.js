/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    A.forEach((num , i) => {
        A[i] = num * num;
    })
    
    A.sort((a, b) => {
        return a - b;
    })
    
    return A;
}
