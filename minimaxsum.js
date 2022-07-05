/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/
const miniMaxSum =(arr)=>{
    let sum = arr.reduce((a,b)=>a+b)
    console.log(sum)
    let maxVal = Math.max(...arr);
    console.log(maxVal)
    let minVal = Math.min(...arr)
    console.log(minVal)
    console.log(sum - maxVal) + ' ' + (sum - minVal)
}

console.log(miniMaxSum([1,3,5,7,9]))