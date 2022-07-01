// var twoSum = function(nums, target) {
//     //loop through arr 
//     // check if current and next equal target
//     //return idices that equal target
     
//     //first loop to get the first indice
//     for(let i = 0; i < nums.length; i++){
//     //second loop to get the second indices 
//        for(let j = i+1; j < nums.length; j++){
//         // if statement that checks if the number equals target
//             if(nums[i] + nums[j]== target){

//                 console.log([i,j])
//                 return [i, j]
//             }



//        }
   

//     }


// };




//  let nums = [4,2,5,1]
// const indices ={}

// nums.forEach((item, index) => {
//     indices[item] = index
//     console.log(indices[item] = index)
// });

// console.log(indices)


//Approach 2: Two-pass Hash Table (JS object)

var twoSum = function(nums, target) {
    // object for the index called indices
    const indices = {};
// a forEach for the arr to get the index of the number
    nums.forEach((item, index) => {
        indices[item] = index
    });
//a for loop with the index

    for (let index = 0; index < nums.length; index++) {
        // we want two numbers
        const complement = target - nums[index];
        console.log(complement, 'complment')

        if (indices[complement] !== undefined && indices[complement] !== index) {
            console.log([index, indices[complement]])
            return [index, indices[complement]]
        }
    }
};
let arr = [2,4,6,1,5]


twoSum(arr,10)
