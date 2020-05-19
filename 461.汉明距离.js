/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let x2 = x.toString(2);
    let y2 = y.toString(2);
    let count = x2.length > y2.length ? x2.length : y2.length;
    x2 = x2.padStart(count, 0);
    y2 = y2.padStart(count, 0);
    let result = 0;
    for (let i = 1; i <= count; i++) {
        let xi = x2[count - i] == undefined ? 0 : x2[count - i];
        let yi = y2[count - i] == undefined ? 0 : y2[count - i];
        if (xi != yi) {
            result += 1;
        }
    }
    return result;
};

// @lc code=end