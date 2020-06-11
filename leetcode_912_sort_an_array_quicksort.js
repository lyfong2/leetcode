/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
}

let quickSort = function(nums, start, end){
    if(start >= end) return; // exit recursion
    
    let index = randomBetween(start, end);
    let pivot = nums[index];
    let left = start;
    let right = end;
    
    while(left <= right){
        while(left <= right && nums[left] < pivot) left++;
        while(right >= right && nums[right] > pivot) right--;
        if(left <= right){
            swap(nums, left, right);
            left++;
            right--;
        }
    }
    quickSort(nums, start, right);  // left
    quickSort(nums, left, end);     // right
}

let swap = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let randomBetween = function(min, max){
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// [5, 2, 3, 1]
//  l        r
//                
// Output: [1,2,3,5]

