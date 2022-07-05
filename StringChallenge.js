 // we need to have three digits separated by a period
  // the second set must add up to an odd number
  // the last digit of each set must bigger than the other digits
  
  //after all has been met it must return true or flase
let string = "114.568.112"
function StringChallenge(str) { 
    let first
    let second
 
  if(str.length < 11){
    return false
  }
  for(let i = 0; i < str.length; i++){
    if(str[i] == '0'){
      return false;
    }
  }
  
  first = parseInt(str[0]) +parseInt(str[1]) + parseInt(str[2])
  second = parseInt(str[4]) + parseInt(str[5]) + parseInt(str[6])

  
  if(first % 2 != 0 || second % 2 == 0){
    console.log(false)
    return false
  }
  
  if(str[2]< str[1] || str[2]< str[0] || str[6]< str[5] || str[6]< str[4] || str[10]< str[8] || str[10] < str[9]){
    console.log(false)
    return false
  }else{
    console.log(true)
    return true
  }
  
  }

StringChallenge(string)

