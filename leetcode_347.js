/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    // 1. key : freq 計算那個數字出現了幾次
    let keyFreq = {};
    nums.forEach(num => {
       if(!keyFreq[num]){
           keyFreq[num] = 1;
       }else{
           keyFreq[num]++;
       }
    })
    // [5,5,5,6,6,7]
    // keyFreq
    // {5:3, 6:2, 7:1}
    // 
    //
    // 2. freq: key 然後將出現頻率相同的數字湊在一起
    let freqKey = {};
    for (let key in keyFreq){
        let freq = keyFreq[key];
        if(!freqKey[freq]){
            freqKey[freq] = []
        }
        freqKey[freq].push(key);
    }    
    
    // freqKey
    // {3:["5"], 2:["6"], 1:["7"]}
    // 
    
    // 3. 將它排序
    let sortedFreqs = Object.keys(freqKey).sort((a, b) => b - a);
    
    let res = [];
    // 4. 將它前k大的數字,push放到同一個arr
    for(let i = 0, resK = 0; i < sortedFreqs.length; i++){
        let freq = sortedFreqs[i];
        let keys = freqKey[freq];
        //計算k個, 把它放進res
        for(j = 0; j < keys.length && resK < k; j++){
            res.push(keys[j]);
            resK++;
        }
    }
    return res;    
};



