/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    // courner cases----
    // leading spaces
    // sign
    // overflow
    // invalid 2147483647 -2147483648
    
    let i = 0;      // 指針, 用來跳到下一個character的
    let sign = 1;   // 預設是1
    let res = 0;
    
    // 過濾前面的spaces
    while(str.charAt(i) === ' '){   
        i++; // 指針, 用來跳到下一個character
    }
    
    // 過濾完後, 下一個character是sign了話, 就進行正負處理 
    // 最後的結果 * sign 1 或-1 就可以變成正數或負數
    if(str.charAt(i) === '+') {                 // 預設sign是1, 所以'+'符號就只要移動指針i 就好了                                                
        i++;                                    
    } else if (str.charAt(i) === '-'){         
        sign =- 1;                              // 如果是'-', 將sign 改成-1       
        i++;                                    
    }
    
    // 處理數字的問題, 如果單一個character 大於等於0, 小於等於9就是數字
    while(str.charAt(i) >= '0' && str.charAt(i) <= '9') {
        // 將結果 * 10 再加上當前的數字, 等於是往前移一位再加上當前的數字
        res = res * 10 + (str.charAt(i) - 0);
        
        // 處理overflow的問題, 最後的結果如果大於2147483647或小於-2147483648就直接回傳這些邊界值
        if(res * sign >= 2147483647) {
            return 2147483647;
        } else if (res * sign <= -2147483648) {
            return -2147483648;
        }
        i++;
    }
    
    return res * sign;    
};
