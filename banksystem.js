var account = []
function addAccount() {
    var Accno = document.getElementById("accno").value
    var Hname = document.getElementById("hname").value
    var Balance = document.getElementById("balance").value
    var std = {
        accno: Accno,
        holdername: Hname,
        balance: Balance,
    }
    account.push(std)
    console.table(account)
    display(account)
}
var btok = document.getElementById("btok")
btok.addEventListener("click", () => addAccount())

function withdraw() {
    var accno = document.getElementById("accno1").value
    var bal = document.getElementById("balance1").value
    const accData = this.account.find((acc) => acc.accno == accno)
    accData.balance -= bal
    console.log(accData.balance)
    display(account)
}
var btok = document.getElementById("btok1")
btok.addEventListener("click", () => withdraw())


function deposite() {
    var accno = document.getElementById("accno2").value
    var accData = this.account.find((acc) => acc.accno == accno)
    var balance2 = Number(document.getElementById("balance2").value)
    accData.balance += balance2
    console.log(accData.balance)
    display(account)
}
var btok = document.getElementById("btok2")
btok.addEventListener("click", () => deposite())


function display() {
    var table = document.getElementById("td")
    for (const bank of account) {
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        td.innerHTML = bank.accno
        tr.appendChild(td)
        td1.innerHTML = bank.holdername
        tr.appendChild(td1)
        td2.innerHTML = bank.balance
        tr.appendChild(td2)
        table.appendChild(tr)
    }
}