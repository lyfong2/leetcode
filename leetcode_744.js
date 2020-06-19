/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length -1;
    
    while(left <= right){
        let mid = Math.floor((right - left) / 2) + left;
        if (letters[mid] <= target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left < letters.length ? letters[left] : letters[0];
};

// letters = ["c", "f", "j"]
//             l
//                       r
//                  m
// target = "a"
// Output: "c"
