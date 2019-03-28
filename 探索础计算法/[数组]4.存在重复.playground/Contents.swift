import UIKit

func containsDuplicate(_ nums: [Int]) -> Bool {
    var array = Set<Int>()
    for i in nums {
        if array.contains(i) {
            return true
        }
        else {
            array.insert(i)
        }
    }
    return false
}


print(containsDuplicate([1,2,2]))
