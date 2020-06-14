/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let words = s.split('');
    let result = '';
    let keyFreq = {};
    
    // key: freq
    words.forEach(num => {
        if(!keyFreq[num]){
            keyFreq[num] = 1;
        } else {
            keyFreq[num]++;
        }
    });
    
    //sort the map first, then push into the result
    Object.keys(keyFreq).sort((a, b) => keyFreq[b] - keyFreq[a]).forEach(function(v){
        for(let j = 0; j < keyFreq[v]; j++){
            result += v;
        }
    });
    
    return result;
};

