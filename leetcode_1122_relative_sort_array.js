/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
let ans = [];
  // 遍歷arr2, 指針j
  for(let i = 0; i < arr2.length; i++){
    let j = 0;
    // 遍歷arr1, 指針i
    while (j < arr1.length) {
      // 比對兩個array是否有相同的值
      if(arr1[j] === arr2[i]){
        ans.push(arr1[j]);
        arr1.splice(j,1);
      } else {
        j++;
      }
    }
  }
  if (arr1.length !== 0){
    return ans.concat(arr1.sort((a,b) => a - b));
  } else {
    return ans;
  }
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]));



