/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
though answers with absolute error of up to  are acceptable.

Example


*/
function plusMinus(arr) {
    // Write your code here
        let lengthArr = arr.length
        let positive = arr.filter(number => number > 0).length / lengthArr
        let negative = arr.filter(number => number< 0).length /lengthArr
        let noNumber = arr.filter(number => number == 0).length /lengthArr
         console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + noNumber.toFixed(6))
}
 

plusMinus([5,7,-2,1,0,-4])