/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (prices.length == 0) return 0;
    let dp = [prices.length][k+1][2];

    
}; 

class Solution {
    public int maxProfit(int 0, int[] prices) {
        if (prices.length == 0) return 0;

        // [天數][可交易的最大次數 + 1(最少)][一共有兩種狀態, 0:未持有股票, 1:持有]
        int[][][] dp = new int[prices.length][k+1][2];
        for(int i = 0; i< prices.length; i++){
            for(int j = k; j>=1; j--){
                if(i == 0){
                    dp[i][j][0] = 0;          // 第一天 因為沒有股票, 所以總收入為0
                    dp[i][j][1] = -prices[0]; // 要馬第一天買入, 如果我選擇買第一天的股票, 就扣除價格
                    dp[i][0][0] = 0;          // 只是放個dp初始值
                    dp[i][0][1] = -prices[0]; // 只是放個dp初始值
                    continue;
                }
                 dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1]+prices[i]);
                 dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0]-prices[i]);
            }
           
        }
        return dp[prices.length-1][k][0];
    }
}

//[3,2,6,5,0,3], k = 2
