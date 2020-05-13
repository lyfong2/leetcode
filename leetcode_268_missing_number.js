/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
        total += i + 1;
    }
    return total - sum;
};
