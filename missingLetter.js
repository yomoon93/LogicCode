// function findMissingLetter(array)
// {
//   let alph = ['abcdefghijklmnopqrstuvwxyz']
//   alph.split('') 
//   console.log(alph)
  
//   for(let i = 0; i<array.length; i++){
    
//   }
  
//   return ' ';
// }

/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that 
returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. 
The length of the array will always be at least 2.
The array will always contain letters in only one case.

*/
function findMissingLetter(arr){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let startingPoint = alphabet.indexOf(str[0]);

  for (let i = 0; i < str.length + 1; i++) {
      if (str[i] !== alphabet[startingPoint + i]) {
          return alphabet[startingPoint + i];
      }
  }
  return undefined;

}

findMissingLetter(['a', 'b', 'C', 'd', 'E','g','h']);