// Testing for 3E59731
// expected [Function] to throw an error

// Testing for 4D0692
// expected [Function] to throw an error

// Testing for C74253152
// expected [Function] to throw an error

//done

function luckcheck(str){
 
  const regex=new RegExp('[A-Z\-\*\_]','gi')
  if(str.length===1){return "ticket length can't be one"}
  if(regex.test(str)){return "error as it include wrong Input"}
   str=str.split('')
   
   firsthalf=[],secondHalf=[]
   l=str.length
   if(l%2===0){
    firsthalf=str.splice(0,l/2)
    secondHalf=str;    
   }
   else{
    firsthalf=str.splice(0,Math.floor(l/2))
    secondHalf=str.splice(1)
   }

    
    if(firsthalf.reduce((a,b)=>parseInt(a)+parseInt(b))===secondHalf.reduce((a,b)=>parseInt(a)+parseInt(b)) ) {return true}
    else {return false}
   
 
}

console.log(luckcheck("2333333333333*33333333"))