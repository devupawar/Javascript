// stdata:[]
function submit() {
    var name = document.getElementById("name").value
    var course = document.getElementById("course").value
    var mob = document.getElementById("mob").value 
    var std = {
        stdName: name,
        course1:course,
        mobileno:mob,  
    }
    // this.stdata.push(stdName)
    console.table(std)
}
var btok = document.getElementById("btok")
btok.addEventListener("click", () => submit())
