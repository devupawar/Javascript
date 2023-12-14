studdata=[
    {
        studname:'john',
        course:'BCA',
        marks:'30',
        grade:'f',
        
    }
      ,
    {
        studname:'devayani',
        course:'BCA',
        marks:'85',
        grade:'A+', 
    } 
    ,
    {
        studname:'priya',
        course:'BCA',
        marks:'89',
        grade:'A+',  
    },
    {
        studname:'john',
        course:'BCA',
        marks:'25',
        grade:'f',
        
    }  ,
    {
        studname:'kiara',
        course:'BCA',
        marks:'50',
        grade:'B',  
    } ,
    {
        studname:'tina',
        course:'BCA',
        marks:'70',
        grade:'A',   
    }     
]
console.log("excellent students")
var filteredData=studdata.filter((student) => student.marks>80)
console.table(filteredData)

console.log("fail students")
var filteredData=studdata.filter((student) => student.marks>10 && student.marks<=30)
console.table(filteredData)

console.log("average students")
var filteredData=studdata.filter((student) => student.marks>40 && student.marks<=60)
console.table(filteredData)

console.log("good students")
var filteredData=studdata.filter((student) => student.marks>60 && student.marks<=80)
console.table(filteredData)
