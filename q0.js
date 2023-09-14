// expected [ 1 ] to deeply equal []
//done 

function prime(x){

  newArr=[]
  till= Math.ceil(x/2)
  console.log(pars)
  if (x===1 || x===-1 || x===0) {return []}
  for(let i=2;i<=till;i++){
    
    if(x%i===0)
    {
      x=x/i
      newArr.push(i)
      i=1
    }
   }
   if(newArr.length===0){
     newArr.push(x)
     return newArr
    }
   else{
    return newArr
   }

}

console.log(prime(3))
console.log(prime(17))
console.log(prime(-1))
console.log(prime(1))
console.log(prime(827))
console.log(prime(0))
console.log(prime(-9))


