
employe={
    Employee:[],
    project:[],
    addemployee:function(emp)
    {
     this.Employee.push(emp)  
    },
    addproject:function(pro)
    {
     this.project.push(pro)
    },
    addteammember:function(pTitle,Empid)
    {
       const mprom=new Promise((resolve,reject)=>{
      var proj=this.project.find((pr)=>pr.ptitle==pTitle)
      var team=this.Employee.find((mem)=>mem.empid==Empid)
      if(team!=null)
       {
         proj.tmember.push(team.empname)
        resolve("team member added")
      }
      else{
       reject(new Error("employee not found"))
      }
     })
     return mprom
    }
    }
    employe.addemployee(
    {
    empid:1,
    empname:"devayani",
    empsalary:20000
    }
    )
    employe.addemployee(
       {
       empid:2,
       empname:"dipali",
       empsalary:30000
       }
    )
    employe.addemployee(
       {
       empid:2,
       empname:"diksha",
       empsalary:40000
       }
    )
    console.table(employe.Employee)
    employe.addproject(
       {
          ptitle:"online banking",
          pstartdate:"15/08/2022",
          penddate:"15/09/2022",
          tmember:[]
       }
    )
    console.table(employe.project)
    employe.addteammember("online banking",1)
    .then((redata)=>
       {
       console.log(redata)
       }    )
       .catch((err) => {
       console.log(err)
        })
        console.table(employe.project) 
    