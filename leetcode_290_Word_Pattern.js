/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const arr = str.split(" ");
    if (arr.length != pattern.length) return false;

    let sMap = new Map();
    let tMap = new Map();
    
    for(let i = 0; i < pattern.length; i++){
        let a = pattern.charAt(i);
        let b = arr[i];

        if(sMap.has(a) && sMap.get(a) !== b){
            return false;            
        }
        if(tMap.has(b) && tMap.get(b) !== a){
            return false;
        }
        sMap.set(a, b);
        tMap.set(b, a);
    }
    return true;    
};

console.log(wordPattern("abba","dog cat cat dog"));

