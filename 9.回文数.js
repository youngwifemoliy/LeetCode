/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    let xStrArray = new Array(...x.toString());
    let xStrArr = new Array(...x.toString()).reverse();
    if (xStrArray.toString() == xStrArr.toString()) {
        return true;
    }
    return false;
};

// @lc code=end