function hourGlass(arr){
    //highest number
    let maxSum = -63;
//loop twice because its a 2D array
for(let i = 0; i < arr.length; i++){
    for (let j= 0; j <arr.length; j++){
        //we create variables to mimic the hourglass
        let top=arr[i][j]+arr[i][j+1]+arr[i][j+2]
        let mid=arr[i+1][j+1]
        let bot=arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
    }
    // current number of the sum
let currNum = top + mid + bot ;
// this gets the max number by comparing
maxSum = Math.max(maxSum, currNum);
}



return maxSum;
}


hourglass([4,-9,-9,-9,90,0,0,0,0,])