/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let hash = {};
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            res.push(nums[i]);
        } else {
            hash[nums[i]] = true;
        }
    }
    return res;
};

// @lc code=end