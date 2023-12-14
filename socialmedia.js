socialmedia={
      posts:[],
      users:[],

      register:function(uid){
        this.users.push(uid)
      },
      addpost:function(uid,pid){
     if(this.users.find((user)=>user.uid==uid)){
      this.posts.push(pid)
      
    }
    else{
      console.log("user not found")
    }
  },
addcomment:function(Pid,uid,Comment)
    {
       var pis=this.posts.find((pos)=>pos.pid==Pid)
       this.posts.comment.push(Comment)

    },
      getallposts:function(){

      },
      getpostbyuser:function(){

      }
    }
socialmedia.register(
    {
        uid:1,
        uname:"devayani"
    })
    socialmedia.register(   {
        uid:2,
        uname:"priya"
    })
    socialmedia.register(    {
        uid:3,
        uname:"dipali"
    })
console.table(socialmedia.users)

socialmedia.addpost(1,
    {
    pid:101,
    pitem:"photo",
    postdescription:"nature",
    comment:[]
  }
  )
console.table(socialmedia.posts)
socialmedia.addcomment(101,1,"beautiful")
socialmedia.addcomment(101,1,"pretty")
console.table(socialmedia.posts)

