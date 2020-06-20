/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let ans = 0;
    let prev = 0;
    let cur = 1;    // 計算現在單一數字的連續數量
    for (let i = 1; i < s.length; i++){
        
        //0,1轉換的狀況
        if(s[i-1] != s[i]){
            ans += Math.min(prev, cur); //000011 -> 0011
            prev = cur;  // 1和0變換後, 把之前的連續加總數量紀錄成prev
            cur = 1;     // cur設成初值
        } else {
            cur++;
        }
    }
    return ans + Math.min(prev, cur);//因為還有一個最後的一位數還沒做完
};
/**
 * 00110
 *     ^
 * 
 * cur: 1   // 計算現在單一數字的數量
 * prev:2   // 1/0變換後, 把prev紀錄
 * ans: 2   // 幾組對子
 */


console.log(countBinarySubstrings("0001110"));
