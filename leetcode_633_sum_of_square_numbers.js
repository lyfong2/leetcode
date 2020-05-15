/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
	if(c < 0) return false;
	let i = 0;
	let j = parseInt(Math.sqrt(c));
	while(i <= j){
		let powSum = i * i + j * j;
		if(powSum === c) {
			return true;
		} else if (powSum > c) {
			j--;
		} else {
			i++;
		}
	}
	return false;
};
