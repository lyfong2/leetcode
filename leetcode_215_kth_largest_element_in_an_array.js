/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function(nums, k) {
  if (nums === null || nums.length === 0) return 0;
  let left = 0;
  let right = nums.length - 1;
  while (true){
    // 判斷一下中間位置
    let pos = partition(nums, left, right); 
    // 這就是第幾大的位置
    if (pos + 1 === k){     // +1 是因為我們是從0開始算起
      return nums[pos];
    } else if (pos + 1 > k) {
      right = pos - 1;
    } else {
      left = pos + 1;
    }
  }
};
// step 1
// k = 2
// pivot: 5
// [6, '5', 4, '3', 1, 2] 
//          l  
//      r
//
let partition = function(nums, left, right) {
  // 中心點, 旋轉點
  let pivot = nums[left];
  let l = left + 1;       //因為取最左邊單位當pivot
  let r = right;
  while(l <= r) {
    if (nums[l] < pivot && nums[r] > pivot){  // 中間點pivot當基準 
      swap(nums, l++, r--);                   // 應該左邊放大,右邊小, 如果不是這樣就左右兩個對調
    }
    if (nums[l] >= pivot) l++;                // 
    if (nums[r] <= pivot) r--;                //
  }
  swap(nums, left, r);                        // 中間數pivot和r對調
  return r;
}

let swap = function(nums, i, j){
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}


console.log(findKthLargest([3,2,1,5,6,4], 2));

//
// Input: [3,2,1,5,6,4] and k = 2 取第3大的數
// Output: 5
// [3,2,1,5,6,4] 
// 1, 2, 3, 4, 5, 6
// 
