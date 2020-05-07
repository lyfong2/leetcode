/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // when every number is 0 return '0' otherwise [0, 0] it will return '00'
    if(nums.every( n => n === 0)) return '0';
    
    nums.sort((k1, k2) => {
        const a = new String(k1);
        const b = new String(k2);
        const first = a + b;
        const second = b + a;
        if(first > second) return -1;
        else if (first < second) return 1;
        else return 0;
    })
    return nums.join('');
};
console.log(largestNumber([0,0]));
// console.log(largestNumber([3,30,34,5,9]));

// 如果compareFunction(a, b)
// 小於0: 排a在最前面
// 大於0: 排b在最前面
// 0: a, b彼此不變，但對於所有不同的元素進行排序.
// k1: 9
// k2: 3
// 3430, 3034
// [9, 5, 34, 30, 3]
// [3,30,34,5,9]
// s1: 5
// s2: 3
// first:  53
// second: 35
// 
// return: 1, -1, -1, -1, -1
// [3, 30, 34, 5, 9]
// [34, 30, 5, 3]

// every(): The every() method checks if all elements in an array pass a test (provided as a function).
