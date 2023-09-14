//correct

function persistance(str){
  count=0;
    str=str.toString().split('') 
    while(str.length>1){
    sum=str.reduce((a,b)=>a*b).toString().split('')
    str=[]
    str=sum 
    count++  }
 return count
}


console.log(persistance(999))
console.log(persistance(39))
console.log(persistance(3))
