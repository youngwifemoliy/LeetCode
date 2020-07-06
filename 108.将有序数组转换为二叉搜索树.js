/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (nums.length == 0) return null;
    let center = Math.floor(nums.length / 2);
    let node = new TreeNode(nums[center]);
    node.left = sortedArrayToBST(nums.slice(0, center));
    node.right = sortedArrayToBST(nums.slice(center + 1));
    return node;
};

// @lc code=end