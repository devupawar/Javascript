Ecommerce={
    product:[],
    cartItems:[],
 
    addproduct:function(prod){
       this.product.push(prod)
    },
    addtocart:function(pid,qty){
     const data=this.product.find((prod)=>prod.pid==pid )
     var pqt={...data,Qty:qty}
     this.cartItems.push(pqt)
 
    },
   displaysum:function(){
        var sum=0
        for (let i = 0; i <this.cartItems.length; i++) { 
           sum+=this.cartItems[i].pprice*this.cartItems[i].Qty
 
           
       }
       console.log(sum)
      }
     }
 
 Ecommerce.addproduct({
   pid:1,
   pname:"laptop",
   pprice:40000
 }),
 Ecommerce.addproduct({
   pid:4,
   pname:"monitor",
   pprice:30000
 }),
 Ecommerce.addproduct(
   {
   pid:2,
   pname:"CPU",
   pprice:5000
 }
 ),
 console.log("products...")
 console.table(Ecommerce.product)
 Ecommerce.addtocart(1,2)
 Ecommerce.addtocart(4,5)
 Ecommerce.addtocart(2,2)
 console.log("cartItems...")
 console.table(Ecommerce.cartItems)
 //Ecommerce.displaysum(1)
 Ecommerce.displaysum(1,3)
 console.log(Ecommerce.displaysum)
 
 