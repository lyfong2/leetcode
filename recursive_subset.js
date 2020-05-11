// 題目:
// 給定一個array, 判斷是否能夠拼湊出s的值.

// 遞歸寫法
//   i =  0   1  2  3   4  5
// arr = {3, 34, 4, 12, 5, 2}
// s   = 9

// 
// subset(arr[5], 9)
// 選<- 9就應該減掉當下的數字才能繼續     
// 9 - 2 = 7
// subset(arr[4], 7)
// i: 0 ~ 4加起來能夠等於7就行了
//
// ->不選
// subset(arr[4], 9)
// i: 0 ~ 4加起來還要等於9


var arr = [3, 34, 4, 12, 5, 2];

var rec_subset = function(arr, i, s) {
    if(s === 0){                                     // 想拼湊的數已經是0了
        return true;
    } else if(i === 0){                              // 已經是最後一個數, 沒得拚, 除非它剛好等於想拼湊的數
        return arr[0] === s;
    } else if(arr[i] > s){                           // 當前的數已經大於,想拚湊的數了, 例如 現在是12, 但想拚出9, 已經超過了
        return rec_subset(arr, i - 1, s);            // 不選
    } else {                
        let a = rec_subset (arr, i - 1, s - arr[i]); // 選
        let b = rec_subset (arr, i - 1, s);          // 不選
        return a || b; 
    }
}

console.log(rec_subset(arr, arr.length - 1, 10));


// https://www.youtube.com/watch?v=Jakbj4vaIbE&t=1900s

