/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    const m = A.length;
    const n = B.length;
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    } // 初始化二维数组dp，每一项都是0
    let res = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] == B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            res = Math.max(dp[i][j], res);
        }
    }
    console.log(dp);
    return res;
};
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]);

// @lc code=end