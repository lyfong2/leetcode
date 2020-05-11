/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (nums === null || nums.length === 0) return 1;

    for (let i = 0; i < nums.length; i ++) {
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] != nums[i]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    for (let i = 0; i < nums.length; i++){
        if(nums[i] != i + 1){
            return i + 1;
        }
    }
    return nums.length + 1;
};
console.log(firstMissingPositive([3,4,-1,1]));
/** 
 * 
 * nums:   [3,4,-1,1]  現在的值跟排序
 * i + 1:  [0,1, 2,3]  最終期望的值跟排序
 * nums-1: [2,3,-2,0]  現在的值 - 1, 希望值的部分能夠變得跟最終期望相同
 *         [1,-1,3,4]  現在的值再排序過後
 *  
 * 
 * - 當前資料 大於0, 因要回傳positive integer.
 * - 當前資料 小於等於 array長度, 因為超過這個數值,就是回傳1, 例如[99,40,50]
 * 這些數值都超過array的長度, 所以就是回傳1
 * 
 * - 當前資料 - 1的數的array 不等於當前的資料, 
 * 
 * 
 * -
 * 使用barcket sort
 * ex:
 * length: 3
 * index
 * [0,1,2,3]
 * [1,2,3,4] 
 * 當前的數 + 1 就應該是它對應的數
 * index + 1
 */
