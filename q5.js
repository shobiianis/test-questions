//not working
//done

function point(str){
    
    const regex=new RegExp('[a-z]','g')
    
    if(regex.test){return "there is an error"}
 
     let score=0
  
 
    for(let i=1;i<11;i++){
       
     tempArr=[],r=0,b=0,g=0
        for(let j=0;j<str.length;j++){
            if(str[j]==i){
              if(str[j+1]==='R')
               {
                 r=r+1
              } 
              if(str[j+1]==='G')
              {
                  g=g+1
             }
             if(str[j+1]==='B')
             {
                  b=b+1
             } 
    
            }
         }
         tempArr.push(r,b,g)
         tempArr.sort()
         score=score+tempArr[0]
         
         
     
    } 
      return score
  }
  
  console.log(point("1ROG1B1R1R1B1B1G1G"))
 
 
 