//given an array of prices where prices[i] is the price of a 
//given stock and choosing a different day in the future to sell

let array = [3,7,1,3,1,5,5,7]

const maxProfit = (arr) =>{
    let profit = 0;
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            const currentProfit = arr[j]-arr[i]

            if(currentProfit > profit){
                profit = currentProfit
            }
        }
    }
    console.log(profit)
    return profit
}
maxProfit(array)