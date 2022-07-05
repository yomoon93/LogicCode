/*
let array = [2,3,3,14,24,24,6];

function sockMerchant(n,ar){
    let colorPairs = [];
    let leftPairs=[]
    //after sorting numbers below
    let sortedNumbers = ar.sort(function(a,b){
        return a-b
    }) 
    //the print for the numbers
    console.log(sortedNumbers)

//now we loop through the numbers

for(let i = 0; i <= n; i++){
    //see the numbers as we go through them
     // console.log(sortedNumbers[i-1])
        if(sortedNumbers[i] === sortedNumbers[i-1]){

        }
    }
    console.log(colorPairs, 'And the lefts pairs'+ leftPairs)

}

console.log(sockMerchant(7,array));

*/


const sockMerchant = arr =>{
    let socks = {}
     for(let i = 0; i<arr.length; i++){
         socks[arr[i]] ? socks[arr[i]]++ : socks[arr[i]] = 1
         console.log(socks)
     }
     let pairs = 0
     for(let key in socks){
         pairs += Math.floor(socks[key]/2)
     }
     return pairs
}
sockMerchant(array  )