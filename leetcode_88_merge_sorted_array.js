/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while(i >= 0 && j >= 0){
        if(nums1[i] >= nums2[j]){
            nums1[k] = nums1[i];
            k--;
            i--;
            
        } else {
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }
    //j > 0
    while(j >= 0){
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    while(i >= 0){
        nums1[k] = nums1[i];
        k--;
        i--;
    }    
};

/**
 * nums2合併到nums1, 
 * nums1只需顯示 m個數量的element, 
 * nums2只需顯示 n個數量的element, 
 * 創建雙指針, 把它們所需要的起始位置設為 m - 1, n - 1
 * ************************************
 * nums1 = [1,2,3,0,5,6], m = 3
 *              i k
 * nums2 = [2,5,6],       n = 3
 *          j
 * 
 * k 是需要放進array的最大值的位置
 * nums1 = [1,2,3,0,0,0]
 *                    k
 * ************************************
 * 
 */
