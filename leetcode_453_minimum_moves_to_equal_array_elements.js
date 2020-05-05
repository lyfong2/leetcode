/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var min = nums[0];  // 先暫時放一個數, 反正後來會在迴圈比對最小數
    var sum = 0;
    var len = nums.length;
    for(let i = 0; i < len; i++){
        sum += nums[i];        
        if(nums[i] < min){
            min = nums[i];
        }
    }
    return sum - len * min;
};

console.log(minMoves([1,2,3]));
// i = 2
// sum : 6
// min : 1
// 

//題目的意思是, 花幾步可以所有array elements相同
// [1,2,3] 
// 第一步 1,2 各 + 1 => [2,3,3]
// 第二步 2,3 再 + 1 => [3,4,3]
// 第三步 兩個3 再 + 1 => [4,4,4]

// 思路: 貪心算法
// 先找出最小的數, min
// 然後用迴圈, 將所有其他的數字分別減去array中最小數
// 然後減去的數加總, 就是步數了

// return sum - len * min; 可想成
// 1 - 1 = 0
// 2 - 1 = 1
// 3 - 1 = 2
// sum = 0 + 1 + + 2, sum: 3
