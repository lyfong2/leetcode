var findPairs = function(nums, k) {
    if(k < 0){
        return 0;
    }    
    let count = 0;
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i]);
    }
    
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i] - k) && map.get(nums[i] - k) !== i){
            map.delete(nums[i] - k);
            count++;
        }
    }
    
    return count;
};
console.log(findPairs([1, 3, 1, 5, 4], 0));
