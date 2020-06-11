var sortArrayByParity = function(A) {
  let i = 0;
  let j = A.length -1;

  while(i < j) {
    if (A[i] % 2 !== 0 && A[j] % 2 === 0) {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
    if (A[j] % 2 !== 0) {
      j--;
    }
    if(A[i] % 2 === 0) {
      i++;
    }
  }
  return A;
};

// [4,2,3,1]
//  i
//        j
    
// even -> odd
