// expected 'cant do' to equal ''

// done


function longest (list,k){
   newArr=[],resArr=[],l=[]
   largest=0
   if(typeof(k)==='string'){return "Put value for k in integar"}
  while(list.length+1>k){
    newArr=list.slice(0,k)
    list.splice(0,1)
     resArr.push(newArr.join(''))
    }
    
    if(resArr.length>0){
       resArr.forEach((x)=>{
           l.push(x.length)
          })
        
          l.map((x,ind)=>{
           if(x>largest){
               largest=x;
               index=ind;
            }
        })  
        
         return resArr[index]
         
    }
  
   else {
       return ""
   } 
    
  }
  
  console.log(longest(list=["tree","foling","trashy","blue","abcdef","uvwxyz"],5))