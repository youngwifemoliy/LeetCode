/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function (nums) {
    if (nums.length < 3) return [];
    let result = new Array();
    let oldI = '';
    nums.sort(function (a, b) {
        return a - b;
    });
    console.log(nums);
    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        console.log(nums[i], nums[start], nums[end]);
        if (nums[i] !== oldI) {
            console.log('---');
            while (start === end) {
                console.log('1---');
                if (nums[i] + nums[start] + nums[end] > 0) {
                    start++;
                    console.log(start);
                } else if (nums[i] + nums[start] + nums[end] < 0) {
                    end--;
                    console.log(end);
                } else {
                    result.push[[nums[i], nums[start], nums[end]]];
                    console.log(start);
                }
            }
        }
        oldI = nums[i];
    }
    return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);

// @lc code=end