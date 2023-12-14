function mult(){
   let a=100
   return function fun(value)
    {    
      var ans=a*value
      console.log(ans)
    }
}
var funmul=mult()
 funmul(20)
(mult())(20)


