/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var hour,
        minutes,
        lightNums,
        result = [],
        timeFormat = "";
    
    for(hour = 0; hour <= 11; hour++) {
        for(minutes = 0; minutes <= 59; minutes++) {
            // Count the number of 'one' bits in each number
            lightNums = hour.toString(2).split(1).length - 1;
            lightNums += minutes.toString(2).split(1).length - 1;
            
            // 那個時間的位數與請求的位數相同，則將其添加到result中
            if (lightNums === num) {
                // 格式化輸出，如果分鍾少於10，則在字符串開頭添加零
                timeFormat = hour.toString() + ":" + (minutes < 10 ? '0' + minutes.toString() : minutes.toString());
                result.push(timeFormat);
            }            
        }
    }
    
    return result;
};
