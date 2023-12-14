arr=["devu","priya","dipali"]
var i=0
function time()
{
    
    console.log(arr[i])
    i++
   
    
}
 //setTimeout(time,2000)
 const mi=setInterval(time,1000)
setTimeout(() => {
    clearInterval(mi)
},4000)
