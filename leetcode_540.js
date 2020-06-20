/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    
    while(l < r){
        let m = Math.floor( l + (r - l) / 2);
        // 確認是在偶數上
        if (m % 2 === 1) m--;
        
        if(nums[m] !== nums[m + 1]){
            r = m;
        } else {
            l = m + 2;
        }
    }
    return nums[l]
};

// Input: nums = [1,1,2,3,3,4,4,8,8]
//                l
//                      m
//                                r
// Output: 2
