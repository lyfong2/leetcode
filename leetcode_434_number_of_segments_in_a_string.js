/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var countSegments = function(s) {
    return s.split(" ").filter((n)=>{return n}).length;
    // filter() does not execute the function for array elements without values.
    // 所以假如你是空字串, length應該會回傳0, 但沒有filter, 空字串length會回傳1
    // 也就是如果是空字串, 他會自動把它從array刪除    
};
