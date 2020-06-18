/*
 * @lc app=leetcode.cn id=1295 lang=javascript
 *
 * [1295] 统计位数为偶数的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let i = 0;
    while (nums.length > 0) {
        let tmp = nums.shift();
        if (tmp.toString().length % 2 == 0) {
            i++;
        }
    }
    return i;
};
// @lc code=end