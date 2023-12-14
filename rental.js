function rental(initialrent){
    let rent= 1500
     return{
      incrementrent:function(a){
       var irt=rent+a
       console.log(irt)
      },
      decreamentrent:function(b){
       var drt=rent-b
       console.log(drt)
      }
    }
  
}
ren=rental(500)
 increment=ren.incrementrent(500)
 decreament=ren.decreamentrent(300)
