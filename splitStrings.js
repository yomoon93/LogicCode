/* Complete the solution so that it 
splits the string into pairs of two characters. 
If the string contains an odd number of characters
 then it should replace the missing second character
  of the final pair with an underscore ('_'). */

  function solution(str){
    // we create new empty array
    let newStr = []
    // a start for our while loop below
    let i = 0;
    // if statement to see if the array is odd if so add '_'
    if(str.length % 2 !== 0){
      str += '_'
    }
    //while loop to push two letters at a time and after go to the next two
    while (i < str.length){
      newStr.push(str[i] + str[i + 1])
      i+=2
    }
    console.log(newStr)
    return newStr
  }




let str ='abcdefg'

