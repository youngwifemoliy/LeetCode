/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const dp = new Array(triangle[triangle.length - 1].length);
    // 最后一行
    for (let i = 0; i < dp.length; i++) {
        dp[i] = triangle[triangle.length - 1][i];
    }
    // 从倒数第二行开始
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};
// @lc code=end

