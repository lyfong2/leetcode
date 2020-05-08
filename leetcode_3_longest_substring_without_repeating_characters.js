var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let maxLen = 0;
    let map = new Map();
    
    for(let i = 0; i < s.length; i++){
        if(map.get(s[i]) >= start){
            start = map.get(s[i]) + 1;
        }
        map.set(s[i], i);
        if(i - start + 1 > maxLen){
            maxLen = i - start + 1;
        }
    }    
    return maxLen;
};

// 1. 把每筆字符串放進map
// 2. 如果有重複出現時, 判斷是否它出現的比start還後面或相等,
//    更新start點 為 i + 1 
// 4. 找出最長數值: i - s + 1
