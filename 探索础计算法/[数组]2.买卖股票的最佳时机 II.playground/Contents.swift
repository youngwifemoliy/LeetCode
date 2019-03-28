import UIKit

func maxProfit(_ prices: [Int]) -> Int {
    if prices.count < 2 {
        return 0
    }
    var maxProfit = 0
    for i in 1..<prices.count where prices[i] > prices[i - 1] {
            maxProfit += prices[i] - prices[i - 1]
    }
    return maxProfit
}

print(maxProfit([7,1,5,3,6,4]))
