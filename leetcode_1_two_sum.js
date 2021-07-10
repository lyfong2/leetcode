/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0;i < nums.length; i++){
        let complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement), i];
        }else{
            map.set(nums[i], i);
        }
    }
    return [];
};

let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums, target));


/**
 * 1. 創建一個map
 * 2. for循環遍歷nums數組
 * 3. 用target減nums[i]
 *      以計算哪個數能跟當前的數字相加得到target
 *      數字相加得到target
 * 4. 檢查map裡有沒有這個數
 */

/*

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/