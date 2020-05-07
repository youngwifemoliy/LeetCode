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
    console.log(['x2', x2, 'y2', y2]);
    let count = x2.length > y2.length ? x2.length : y2.length;
    console.log(count);
    let result = 0;
    for (let i = count; i <= 0; i--) {
        console.log(i);
        let xi = x2[i] == undefined ? 0 : x2[i];
        let yi = y2[i] == undefined ? 0 : y2[i];
        if (xi != yi) {
            result += 1;
        }
    }
    return result;
};

let aaa = hammingDistance(1, 4);
console.log(aaa);
// @lc code=end