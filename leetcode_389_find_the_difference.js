/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sChars = s.split('').sort();
    let tChars = t.split('').sort();
    let i;
    for(i = 0; sChars.length; i++){
        if(sChars[i] !== tChars[i]){
            return tChars[i];    
        }
    }
    return tChars[i];
};
