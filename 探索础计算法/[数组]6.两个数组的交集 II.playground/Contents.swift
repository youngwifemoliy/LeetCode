import UIKit

func intersect(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
    var array = Array<Int>()
    
    for a in nums1 {
        for b in nums2 {
            if a == b {
                array.append(a)
            }
        }
    }
    
    return array
}

print(intersect([1,1,2], [2]))
