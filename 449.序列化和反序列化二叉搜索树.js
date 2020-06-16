/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
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
var serialize = function (root) {
    if (root == null) {
        return "x";
    }
    let left = serialize(root.left);
    let right = serialize(root.right);
    return root.val + "," + left + "," + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */


var deserialize = function (data) {
    let buildTree = function (array) {
        let tmp = array.shift();
        if (tmp == "x") {
            return null;
        }
        const node = new TreeNode(tmp);
        node.left = buildTree(array);
        node.right = buildTree(array);
        return node;
    }

    let array = data.split(",");
    return buildTree(array);
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end