// Expected: '()()', instead got: ')(()'
// Expected: '(((())))(()())', instead got: '))))(()((((())()'
//done

function fixParanthesis(param){

    param=param.split('')
    newArr=[]
    count=0
    paramlength=param.length;
    for(let i=0;i<paramlength;i++){
        if(param[i]===')' && count==0)
        {
            newArr.push(')')
            newArr.unshift('(')
            
        }
        else if(param[i]==='(' ){
            newArr.push('(')
            count++       
         }

         else {
            newArr.push(')')
            count--  
        }

    }
    for(let j=0;j<count;j++){
        newArr.push(')')
    }
    

    return newArr.join('')
}

console.log(fixParanthesis(")("))
console.log(fixParanthesis("))))(()("))
console.log(fixParanthesis("(((((("))
