/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
  */
var findContentChildren = function(g, s) {
    if(g === null || s === null) return 0;
    g.sort();
    s.sort();
    let gi = 0; // 開始分的小孩
    let si = 0;
    // g:[1, 2, 3], s:[1, 1] 
    //       gi 
    //                    si
    while(gi < g.length && si < s.length){
        if(g[gi] <= s[si]){
            gi++;
        }
        si++;
    }
    return gi;
};


    // g:[1,2,3], s:[1,1] 3 children and 2 cookies
    // g: 就是每個小孩的需要數量
    // s: 就是餅乾有的數量跟可滿足量, 回傳最多可以滿足幾個小孩

console.log(findContentChildren([1,2,3],[1,1]));

    
// Input: [1,2,3], [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. 
// The greed factors of 3 children are 1, 2, 3. 
// And even though you have 2 cookies,
// since their size is both 1, 
// you could only make the child whose greed factor is 1 content.
// You need to output 1.
    
// 題目描述：每個孩子都有一個滿足度grid，每個餅乾都有一個大小size，
// 只有餅乾的大小大於等於一個孩子的滿足度，該孩子才會獲得滿足。
// 求解最多可以獲得滿足的孩子數量。

// 給一個孩子的餅乾應當盡量小並且又能滿足該孩子，這樣大餅乾才能拿來給滿足度比較大的孩子。
// 因為滿足度最小的孩子最容易得到滿足，所以先滿足滿足度最小的孩子。
