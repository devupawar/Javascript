  var addition=0
var add=(num ,...morenum)=>{
    console.log(num)
    console.log(morenum)
    for(let i=0;i<morenum.length;i++)
    {   
      morenum[i]=num+morenum[i]

    }
    return morenum
    
}
result=add(10,20,30,40,50)
for (let index = 0; index < result.length; index++) {
  console.log(result[index])
  
}
console.log(result)

