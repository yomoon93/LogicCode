


 function lonelyInteger(a) {


    let unique = a.filter(function(value){
      return a.indexOf(value) === a.lastIndexOf(value)
    })
    console.log(unique[0])
    return unique[0];
  }
 lonelyInteger([1,2,3,4,3,2,1])


 const lonelyLetters = (a) =>{
    let single = a.filter(value, index =>{
        let g = a.sort((a,b)=>{
          return a - b
        })
       
        return a.indexOf(value) === a.lastIndexOf(value)
     })
     console.log(value)
 }


