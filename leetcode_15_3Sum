/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const r = [];
    for (let i = 0; i < nums.length - 2; i++){      // 因為要回傳3個數,後面有兩個雙指針, 所以要-2
        if (nums[i] > 0) break;                     // 如果nums[i], 大於0就不用算下去, 因為剩下的 l,r只會更大
        if (i > 0 && nums[i] === nums[i - 1]) continue; 
        let left = i + 1;
        let right = nums.length -1;
        while (left < right) {
            const s = nums[i] + nums[left] + nums[right];
            if (s < 0) {                            // 總和太小, 把指針總和加大
                left += 1; 
            } else if (s > 0) {
                right -= 1;                         // 總和太大, 把指針總和調小
            } else {
                r.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]){      //去重
                    left += 1;
                }
                while (left < right && nums[right] === nums[right - 1]){    //去重
                    right -= 1;
                }
                left += 1;
                right -= 1;
            }
        }
    }
    return r;
};
