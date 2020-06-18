/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
    let i = 0;
    let j = 1;
    let res = -Infinity;
    while (j < A.length) {
        let tmp = A[i] + i - j;
        res = Math.max(res, tmp + A[j]);
        if (A[j] >= tmp) {
            i = j;
        }
        j++;
    }
    return res;
};
// @lc code=end