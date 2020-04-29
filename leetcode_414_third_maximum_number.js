/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function(nums) {
    nums = Array.from(new Set(nums));
    // new Set()會把重複消除
    // .from(123)會把每個字分開 [1, 2, 3]

    var len = nums.length;
    if(len<=2){
    	return Math.max(...nums);
    }
    if(len===3){
    	return Math.min(...nums);
    }
    // sort 降膩
    nums = nums.sort((a,b)=>{return b-a;})
    return nums[2];
};
