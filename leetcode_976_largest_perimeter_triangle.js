var largestPerimeter = function(A) {
	A.sort((a, b) => { return b - a;});
	for(let i = 0; i < A.length - 2; i++){
		let sum = A[i + 1] + A[i + 2];
		if (sum > A[i]) return sum + A[i];
	}
	return 0;  
}
// 因為已經sort過了, 所以前幾個都是Array最大的數

console.log(largestPerimeter([3,2,3,4]));

// Input:  [3,2,3,4]
// sorted: [4,3,3,2]
//          i 
//            i+1
//              i+2 
// sum: 6
// Output: 10
