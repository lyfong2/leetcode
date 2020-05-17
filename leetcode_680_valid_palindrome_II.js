/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if (s === null) return false;
    
    for(let i = 0, j = s.length - 1; i < j ; i++, j--){
        if(s.charAt(i) !== s.charAt(j)){
           return isPalindrome(s, i, j - 1) || isPalindrome(s, i + 1, j); 
        }
    }
    return true;    
};

let isPalindrome = function(s, i, j){
    while(i < j){
        if(s.charAt(i++) != s.charAt(j--)){
            return false;
        }
    }
    return true;
}
