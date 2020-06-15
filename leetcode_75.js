/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums === null || nums.length === 0) return;
    let left = 0;
    let right = nums.length - 1;
    let index = 0;
    
    while(index <= right){
        if(nums[index] === 0) {
            swap(nums, index++, left++);
        } else if (nums[index] === 1){
            index++;
        } else {
            swap(nums, index, right--);
        }
    }
};

let swap = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
