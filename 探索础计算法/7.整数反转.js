/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x === 0) {
        return 0;
    }
    const maxNumber = Math.pow(2, 31);
    const minNumber = Math.pow(-2, 31);
    var ord = Math.abs(x);
    var now = 0;
    while (ord > 0) {
        now = now * 10 + ord % 10;
        ord = Math.floor(ord / 10);
        console.log('now = ' + now);
        console.log('ord = ' + ord);
    }

    if (x > 0) {
        return now > maxNumber ? 0 : now;
    } else {
        return -now < minNumber ? 0 : -now;
    }

};

// @lc code=end