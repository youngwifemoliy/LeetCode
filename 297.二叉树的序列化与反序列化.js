/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// BFS
var serialize = function (root) {
    let rootArray = [root];
    let res = [];
    while (rootArray.length) {
        let node = rootArray.shift();
        if (node) {
            res.push(node.val);
            rootArray.push(node.left);
            rootArray.push(node.rihgt);
        } else {
            res.push("x");
        }
    }
    return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// BFS
var deserialize = function (data) {
    console.log(data);
    if (data == "x") {
        return null;
    }
    let dataArray = data.split(",");
    let index = 1;
    const node = new TreeNode(dataArray.shift());
    while (index < dataArray.length) {
        if (dataArray[index] != "x") {
            node.left = dataArray[index];
        }
        if (dataArray[index + 1] != "x") {
            node.right = dataArray[index + 1];
        }
        index += 2;
    }
    return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end