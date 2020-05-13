/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let arr = new Array(N + 1);
    arr[0] = 0
    arr[1] = 1
    for(let i = 2; i <= N; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[N]
};


console.log(fib(3));
