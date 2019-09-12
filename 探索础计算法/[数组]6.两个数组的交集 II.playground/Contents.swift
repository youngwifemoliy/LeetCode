import UIKit

//func intersect(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
//
//
//
//    var dict1: [Int: Int] = [:]
//    var dict2: [Int: Int] = [:]
//    for num in nums1 {
//        if dict1[num] != nil {
//            dict1[num] = dict1[num]! + 1
//        } else {
//            dict1[num] = 1
//        }
//    }
//    for num in nums2 {
//        if dict1[num] != nil {
//            if dict2[num] != nil {
//                dict2[num] = min(dict2[num]! + 1, dict1[num]!)
//            } else {
//                dict2[num] = 1
//            }
//        }
//    }
//    var res: [Int] = []
//    for (key, val) in dict2 {
//        for _ in 1...val {
//            res.append(key)
//        }
//    }
//
//    return res
//
//}

func intersect(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
    var tmp = nums2
    var array = Array<Int>()
    for a1 in nums1 {
        for (key,a2) in tmp.enumerated().reversed() {
            if a1 == a2 {
                array.append(a1)
                tmp.remove(at: key)
                break
            }
        }
    }
    return array
//
//    let inter = Set(nums1 + nums2)
//    var array = Array<Int>()
//    for i in inter {
//        array.append(i * min(nums1.count(i), nums2.count(i)))
//    }
//    return array
    
    
}

print(intersect([1], [1]))
