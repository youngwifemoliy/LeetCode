/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

let dfs = function (grid, x, y) {
    grid[x][y] = 0;
    if (grid[x] && grid[x][y + 1] == 1) {//上
        dfs(grid, x, y + 1);
    }
    if (grid[x] && grid[x][y - 1] == 1) {//下
        dfs(grid, x, y - 1);
    }
    if (grid[x - 1] && grid[x - 1][y] == 1) {//左
        dfs(grid, x - 1, y);
    }
    if (grid[x + 1] && grid[x + 1][y] == 1) {//右
        dfs(grid, x + 1, y);
    }
}

var numIslands = function (grid) {
    if (grid.length < 1) {
        return 0;
    }
    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {//如果这个是陆地,那么就可以进来
                islands++;//岛屿数量+1
                dfs(grid, i, j);//递归将相邻的所有陆地都变成水(0)
            }
        }
    }
    return islands;
}

// @lc code=end

