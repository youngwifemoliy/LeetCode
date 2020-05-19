/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
//slidng window
var lengthOfLongestSubstring = function (s) {
    let set = new Set(),
        i = 0,
        j = 0,
        maxCount = 0;
    for (i; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            maxCount = Math.max(maxCount, set.size);
        } else {
            while (set.has(s[i])) {
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
    }
    console.log(maxCount);
    return maxCount;
};


// @lc code=end