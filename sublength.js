// Write function below
const subLength = (str, char) => {
    //variable for char were at
    let charCount = 0;
    //for actaul length
    let len = -1;
    //loop to go through the word
    for (let i=0; i<str.length; i++) {
      //if the letter is the same
      if (str[i] == char) {
        //add 1 to charCount
        charCount++;
        // charCount is greater than 2
        if (charCount > 2) {
          return 0;
        }
        //len is the same as -1
        if (len == -1) {
       //len = whatever i is at that time 
          len = i;
          // else len = i -len +1
        } else {
          len = i - len + 1
        }
      }
    }
    //charCount is less than 2 return
    if (charCount < 2) {
      return 0;
    }
  
    return len;
  };