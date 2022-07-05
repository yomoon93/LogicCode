const compressedString=(message)=> {
   // Write your code here
   let string = ''
   let count = 1;
   for(let i = 0; i < message.length; i++ ){
       let current = message[i]
       let next = message[i+1]
       if(current === next){
           count++
       }else{
           string += current + String(count)
           console.log(string)
           count = 1
       }
   }
   return string.length < message.length ? string : message
    
}
console.log(compressedString('abaabbbc'))