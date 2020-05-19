/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

var openLock = function (deadends, target) {
    if (target == null) {
        return -1;
    }
    let deadSet = new Set(deadends);
    if (deadSet.has('0000') ||
        deadSet.has(target)) {
        return -1;
    }
    let seen = new Set();
    seen.add('0000');
    let que = [];
    que.push('0000');
    que.push('');
    let depth = 0;
    let count = 0;
    while (que.length != 0) {
        let number = que.shift(); //取出来第一个数
        if (number == '') {
            depth++;
            if (que.length > 0) {
                que.push('')
            }
        } else if (number == target) {
            return depth;
        } else if (!deadSet.has(number)) {
            for (let i = 0; i < 4; i++) {
                let newNumber1 = (Number(number.charAt(i)) - 1 + 10) % 10;
                let newNumber2 = (Number(number.charAt(i)) + 1 + 10) % 10;
                let newStr1 = number.substring(0, i) + newNumber1 + number.substring(i + 1);
                let newStr2 = number.substring(0, i) + newNumber2 + number.substring(i + 1);
                if (!seen.has(newStr1)) {
                    seen.add(newStr1);
                    que.push(newStr1);
                }
                if (!seen.has(newStr2)) {
                    seen.add(newStr2);
                    que.push(newStr2);
                }
            }
        }

    }
    return -1;
};



// @lc code=end