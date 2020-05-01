/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let arr = [];
    //創建一個數字 1 ~ n的陣列
    for (let i = 0; i < nums.length; i++) {
        arr[i] = i + 1;
    }
    // 將已經有的數字-1
    for (v of nums){
        arr[v - 1] = -1;
    }
    // 然後把缺少的數字找出
    return arr.filter(i => (i > 0));
}
