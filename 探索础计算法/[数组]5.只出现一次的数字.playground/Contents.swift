import UIKit

//func singleNumber(_ nums: [Int]) -> Int {
//    var number = 0
//    var map = Dictionary<Int,Bool>()
//    for i in nums {
//        if map.keys.contains(i) {
//            map[i] = true
//        }
//        else {
//            map[i] = false
//        }
//    }
//    for obj in map.enumerated() where obj.element.value == false {
//        number = obj.element.key
//    }
//    return number
//}

func singleNumber(_ nums: [Int]) -> Int {
    var singleNum = 0
    for n in nums {
        singleNum = n ^ singleNum
    }
    print(0110 ^ 0010)
    let dic = [1:1,2:2]
    print(Array(dic.keys)[1])
    return singleNum
}

print(singleNumber([4,1,2,1,2]))

