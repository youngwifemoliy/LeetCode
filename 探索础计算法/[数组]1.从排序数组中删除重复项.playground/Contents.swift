import UIKit

func removeDuplicates(_ nums: inout [Int]) -> Int {
    if nums.count == 0 {
        return 0
    }
    for (index,value) in nums.enumerated().reversed() {
        if index == 0 {
            break
        }
        if value != nums[index - 1] {
            continue
        }
        else {
            nums[index] = nums[index - 1]
            nums.remove(at: index)
        }
    }
    print(nums)
    return nums.count
}
var x = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(&x)





