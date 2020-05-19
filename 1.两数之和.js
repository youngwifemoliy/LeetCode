/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (nums.length < 1) {
        return -1;
    }
    let oneIndex = 0;
    while (nums.length > 0) {
        let one = nums.shift();
        let tow = target - one;
        oneIndex++;
        if (nums.includes(tow)) {
            return [oneIndex - 1, nums.indexOf(tow) + oneIndex];
        }
    }
};
// @lc code=end