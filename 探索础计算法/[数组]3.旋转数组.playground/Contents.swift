import UIKit

func rotate(_ nums: inout [Int], _ k: Int) {
    var time = 1
    for (index,value) in nums.enumerated().reversed() {
        if time > k % nums.count {
            break
        }
        nums.insert(value, at: 0)
        nums.removeLast()
        time += 1
    }
}

/*
func rotate(_ nums: inout [Int], _ k: Int) {
    // (当前位置 + k) % 数组长度 = 移动后的位置
    var res = Array(repeating: 0, count: nums.count)
    for i in 0..<nums.count {
        let index = (i + k) % nums.count
        res[index] = nums[i]
    }
    nums = res
}
 */


var array = [1,2,1,2,1,2,1,2]
rotate(&array, 1)
