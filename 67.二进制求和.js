/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
    while (a.length > b.length) {
        b = "0" + b;
    }
    while (b.length > a.length) {
        a = "0" + a;
    }
    let carry = 0;
    let result = [];
    for (let i = a.length - 1; i >= 0; i--) {
        if (Number(a[i]) + Number(b[i]) + carry === 0) {
            result.push("0");
            carry = 0;
        } else if (Number(a[i]) + Number(b[i]) + carry === 1) {
            result.push("1");
            carry = 0;
        } else if (Number(a[i]) + Number(b[i]) + carry === 2) {
            result.push("0");
            carry = 1;
        } else {
            result.push("1");
            carry = 1;
        }
        console.log("0-", i);
    }
    if (carry) result.push("1");
    console.log("1-", result);
    return result.reverse().join("");
};
// @lc code=end