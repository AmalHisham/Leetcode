let prices = [7,1,5,3,6,4]

function CalculateMaxProfit(prices) {

    if(prices.length <= 1) {
        return 0
    }

    let left = 0
    let right = 1
    let maxProfit = 0

    while (right < prices.length) {
        
        if(prices[left] > prices[right]) {
            left = right
        }

        else {
            let profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
        }
        
        right++
    }

    return maxProfit
}

console.log(CalculateMaxProfit(prices))