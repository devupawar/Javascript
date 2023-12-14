var str1="india is an agricultural country.most of the people live in villages and are farmers.they get up early in the morning and go to the fields "
let count=0
let count1=0
let count2=0
var str2=(str1.split(" "))
for(var i=0;i<str1.length;i++)
{
  if(str2[i]=='the') 
  {
  count=count+1
  
  }
  if(str2[i]=='an')
  {
    count1=count1+1
    
  }
  if(str2[i]=='a')
  {
    count2=count2+1
    }
}
console.log("Article the : "+count)
console.log("Article an :"+count1)
console.log("Article a :"+count2)

var str="I am a girl.I am from jalgoan"
var word=(str.split(" "))
var lsword=word[word.length-1]
var result=(str.replace(lsword.charAt(0),lsword.charAt(0).toUpperCase()))
console.log(lsword)
console.log(result)



