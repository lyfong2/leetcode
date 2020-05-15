/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const snums = [...nums];
    snums.sort((a,b) => a-b);
    let start = snums.length;
    let end = 0;
    for(let i = 0; i < snums.length; i++){
        if(snums[i] != nums[i]){
            start = Math.min(start, i);
            end = Math.max(end, i);
        }
    }
    
    return (end - start >= 0 ? end - start + 1: 0);
};
