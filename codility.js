

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //     let reverse = 0;
    //     let j = A.length
    //     let seq
    // for(let i = 0; i < j -1; i++){
    //         if(A[i] == A[i+1]){
    //             reverse++
    //             console.log(reverse)
    //         }
    //         if(A[i] == 1){
    //             A[i] = 0
    //         }else if(A[i] == 0){
    //             A[i] =1
    //         }
    //         if(A[0] == A[1]){
    //             reverse++
    //             console.log(reverse,'Why')
    //         }
    //         return reverse
    // }
   
    


   
        let oneTurnZero = 0;
        let zeroTurnOne = 0;
        for (let i = 0; i < A.length; i++) {
          if (A[i] == 1 - (i % 2)) {
            zeroTurnOne++;
          }
          if (A[i] == i % 2) {
             oneTurnZero++;
          }
        }
        return Math.min( oneTurnZero, zeroTurnOne );
      

}



function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let roadFixes = 0
        
       for(let i =0; i < S.length; i++){
           if(S[i] ==='X'){
               roadFixes++
               i=i+2
           }
       }
       return roadFixes
}
console.log(solution([1,0,1,0,1,1]))