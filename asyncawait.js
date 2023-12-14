const users=[{
   uid:1,
   uname:"devayani",
   upass:"dp15"
},
{
   uid :2,
   uname:"harshada",
   upass:"harshu"
}]
const posts=[{
   pid:1,
   ptitle:"image",
   pdesc:"about nature",
   uid:1
},
{
   pid:2,
   ptitle:"video",
   pdesc:"comedy",
   uid:2
},
{
   pid:3,
   ptitle:"photo",
   pdesc:"actress",
   uid:2
}]
function doUserLogin(username,userpass){
   return new Promise((resolve,reject)=>{
      const user=users.find((us)=>us.uname==username && us.upass==userpass)
      if(user)
      {
         setTimeout(()=>{
            resolve(user)
         },2000)
      }
      else
      {
         reject(new Error("please enter correct username and password"))
      }
   })
}
function getPostByUser(userId){
return new Promise((resolve,reject)=>{
   const postsData=posts.filter((post)=>post.uid==userId)
   if(postsData.length>0){
      setTimeout(()=>{
         resolve(postsData)
      },2000)
   }
   else{
      reject(new Error("posts not available"))
   }
})
} 
// doUserLogin("harshada","harshu")
// .then((user)=>{
//    console.table(user)
//    getPostByUser(user.uid)
//    .then((posts)=>{
//       console.table(posts)
//    }).catch((err)=>
//    {
//       console.log(err)
//    })
// })

async function doTask(){
   try{
      const user=await doUserLogin("harshada","harshu")
      console.table(user)
      const posts=await getPostByUser(user.uid)
      console.table(posts)
   }catch(error){
      console.log(error)
   }
}
doTask()
