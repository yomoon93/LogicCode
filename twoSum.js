let array = [2,4,6,7,10,1]
// novice or brute force version
const twoSum = (arr,target) =>{
    for(let i = 0; i<arr.length; i++){
        for(let j = i++; i <arr.length -1; j++){
            if(arr[j] === target - arr[i])
                console.log([i,j])
                return [i,j]
            
        }
        console.log(null)
        return null;
    }
}

twoSum(array,17)