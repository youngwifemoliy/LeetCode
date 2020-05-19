/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const list = [{
        num: n,
        step: 0
    }];
    const visitedObj = {
        n: true
    } //已经算过的
    while (list.length > 0) {
        const {
            num,
            step,
            visited
        } = list.shift()
        for (let i = 1;; i++) {
            const extraNum = num - i * i
            if (extraNum < 0) break
            if (extraNum === 0) return step + 1
            if (!visitedObj[extraNum]) { //如果没有算过
                visitedObj[extraNum] = true
                list.push({
                    num: extraNum,
                    step: step + 1
                })
            }
        }
    }
};
var aa = numSquares(12);
// @lc code=end