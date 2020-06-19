/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
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
 * @param {string} S
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var recoverFromPreorder = function (S) {
    let array = formantS(S);
    console.log("进来的数组", array);

    function dfs(depth) {
        if (!array.length) return null;
        if (array[0].depth === depth) {
            const tmp = array.shift();
            const node = new TreeNode(tmp.number);
            node.left = dfs(depth + 1);
            node.right = dfs(depth + 1);
            return node;
        } else {
            return null;
        }
    }
    return dfs(0);
};


var formantS = function (s) {
    let array = [];
    let depth = 0;
    let number = "";
    for (let i = 0; i < s.length; i++) {

        if (s[i] !== "-") {
            array.push({
                "depth": depth,
                "number": s[i]
            });
            depth = 0;
        } else {
            depth++;
        }
    }
    return array;
}

console.log(recoverFromPreorder("1-401--349---90--88"));

// @lc code=end