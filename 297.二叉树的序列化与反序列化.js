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
var serialize = function (root) {
    if (root == null) {
        return "X";
    }
    let left = serialize(root.left);
    let right = serialize(root.right);
    return root.val + "," + left + "," + right
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    // console.log(data);
    const list = data.split(',') // 转成list数组
    return buildTree(list) // 构建树，dfs的入口
};

const buildTree = (list) => { // dfs函数
    const nodeVal = list.shift() // 当前考察的节点
    if (nodeVal == 'X') { // 是X，返回null给父调用
        return null
    }
    const node = new TreeNode(nodeVal) // 创建node节点
    node.left = buildTree(list) // 构建node的左子树
    node.right = buildTree(list) // 构建node的右子树
    return node // 返回以node为根节点的子树给父调用
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end