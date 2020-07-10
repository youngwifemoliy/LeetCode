/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 2) return 0;
    //创建二维数组
    let dp = new Array(prices.length);
    for (let i = 0; i < prices.length; i++) {
        dp[i] = new Array(2);
    }
    //  dp[i][0] 表示第{i}天没有持有股票
    //  dp[i][1] 表示第{i}天持有股票
    //初始化状态
    dp[0][0] = 0; //第0天持有股票
    dp[0][1] = 0 - prices[0]; //第0天没有持有股票
    //第一天没有股票(第0天没有股票,第0天的收益+第一天的收益)
    dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1]);
    //第一天持有股票(前0天持有的股票,第)
    dp[1][1] = Math.max(dp[0][1], -prices[1]);

    //迭代
    for (let i = 2; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
    }
    return dp[prices.length - 1][0]
};
// @lc code=end