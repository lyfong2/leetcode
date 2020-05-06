/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();
    for(let i = 0; i < s.length; i++) {
        let a = s.charAt(i);
        let b = t.charAt(i);

        if(mapS.has(a)) {
            if(mapS.get(a) != b) 
                return false;
        }
        if(mapT.has(b)) {
            if(mapT.get(b) != a) 
                return false;
        }
        mapS.set(a, b);
        mapT.set(b, a);
    }
    
    return true;
};
console.log(isIsomorphic("foo","baa"));
