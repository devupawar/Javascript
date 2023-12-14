const studs = []
function fillform(std, goToPay) {
  studs.push(std)
  console.log("Form filled ")
  setTimeout(() => {
    goToPay(std)
  }, 2000);
}
function makepay(std, goToReceipt) {
  console.log(`payment done by ${std.name} of Rs ${std.fees}`)
  setTimeout(() => {
    goToReceipt(std)
  }, 6000);
}
function generateReceipt(std) {
    console.log(`receipt generated of ${std.name} of Rs ${std.fees}`)
  }
  const std1 = {
    name: "riya",
    fees: 26300,
    Course: "MCA"
}
fillform(std1, (newStd) => {
  makepay(newStd, (std) => {
    generateReceipt(std)
  })
})


const std2 = {
  name: "devayani",
  fees: 22300,
  course: "MCA"
}
fillform(std2, (newStd) => {
  makepay(newStd, (std) => {
    generateReceipt(std)
  })
})
