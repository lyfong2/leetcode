/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const res = [];// 
    const arr = nums.reduce((init, item) => {
        init = init.concat(item);
        return init;
    }, [])
    
    if (r * c > arr.length) {
        return nums;
    }
    
    let count = 0;
    
    for (let i = 0; i < r; i++) {
        res.push(arr.slice(count, count + c));
        count += c;
    }
    return res;
};
