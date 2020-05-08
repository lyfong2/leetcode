/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let i = 0; j = s.length - 1;
    let end = s.length - 1;
    // find the different string
    while(i < j){
        if(s[i] === s[j]){
            i++;
            j--;
        } else {
            // if two wards are different
            i = 0;
            end--;
            j = end;
        }
    }
    return s.substr(end + 1).split('').reverse().join('') + s;
};
console.log(shortestPalindrome("abcd"));
//             e
//       j
// a a c e c a a a
//       i

// Input: "aacecaaa"
// Output: "aaacecaaa"
