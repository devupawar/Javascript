

products = {
  product: [
    {
      pid: 1,
      pname: "laptop",
      pprice: 40000,
      rating: [{
        rid: 101,
        rnum: 2,
        rcomment: "bad"
      },
      {
        rid: 102,
        rnum: 4,
        rcomment: "good"
      },
      {
        rid: 103,
        rnum: 4,
        rcomment: "excellent"
      }
      ]
    },
    {
      pid: 1,
      pname: "mouse",
      pprice: 400,
      rating: [{
        rid: 102,
        rnum: 3,
        rcomment: "average"
      },
      {
        rid: 102,
        rnum: 4,
        rcomment: "good"
      },
      {
        rid: 103,
        rnum: 5,
        rcomment: "excellent"
      }
      ]
    }
  ],
  getaverage: function(Pid) {
    var sum = 0
    var avg = 0
       const p=this.product.find((prod)=>prod.pid==Pid)
        for (var j = 0; j < p.rating.length; j++) {
          //console.log(p[j].rating)
          sum+=p.rating[j].rnum
      }
  
    avg = sum / j
    console.log("average : ",avg)
  }
}
