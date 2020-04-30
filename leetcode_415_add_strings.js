/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    //
    if(num1.length < num2.length) return addStrings(num2, num1);
    
    let i = num1.length - 1,
        j = num2.length - 1,
        out = '',
        carry = 0;
    
    while(i >= 0) {
        let digit1 = parseInt(num1.charAt(i));
        let digit2 = j < 0 ? 0 : parseInt(num2.charAt(j));
        let sum = carry + digit1 + digit2;
        
        carry = 0;
        // 判斷十進位
        if (sum > 9) {
            carry = 1;
            sum %= 10;
        }
        
        // toString and print out
        
        out = `${sum.toString()}${out}`;
        
        i -= 1;
        j -= 1;        
    }
    
    if(carry > 0){
        out = `${carry.toString()}${out}`;
    } 
    
    return out;    
};
