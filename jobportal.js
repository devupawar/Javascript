jobportal={
   seekers:[],
   company:[],
   jobpost:[],
   jobapply:[],

   addseekers:function(seeker)
   {
      this.seekers.push(seeker)
   },
   addcompany:function(comp)
   {
      this.company.push(comp)
   },
   addjobpost:function(cmid,job)
   {
      compan=this.company.find((cm)=>cm.cmpid==cmid)
      const mpr=new Promise((resolve,reject)=>{
         if(compan!=null)
         {
            this.jobpost.push(job)
            resolve("job post added")
         }
         else{
            reject(new Error("company not found"))
         }
      }).then((result) => {
         console.log(result)
      }).catch((err) => {
         console.log(err)
      })
   },
   addapplication:function(skrid,cmpoid)
   {
      skr=this.seekers.find((sk)=>sk.skid==skrid)
      com=this.company.find((cpy)=>cpy.cmpid==cmpoid)
      const mprm=new Promise((resolve,reject)=>{
         if(skr!=null && com!=null)
         {
          this.jobapply.push(skr) 
          this.jobapply.push(com)
          resolve("Application succees") 
         }
         else
         {
            reject(new Error("seeker and company not found"))
         }
      }).then((rest) => {
         console.log(rest)
      }).catch((eror) => {
         console.log(eror)
      })

   }
}
     
jobportal.addseekers(
   {
      skid:1,
      skname:"dipali"
   }
)
console.table(jobportal.seekers)
jobportal.addcompany(
   {
      cmpid:1,
      cmpname:"infosys"
   }
)
console.table(jobportal.company)
jobportal.addjobpost(1,
   {
     jpid:1,
     jpost:"H.R"
   }
)
console.table(jobportal.jobpost)
jobportal.addapplication(1,1)
console.table(jobportal.jobapply)

