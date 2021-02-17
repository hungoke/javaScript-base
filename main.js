console.log(document)


document.body.appendChild(document.createElement("div").appendChild(document.createTextNode("Phạm Thị Thanh Tâm")))
document.getElementsByTagName("div")[0].addEventListener("click", print)
function print() {
  console.log(Date())
}

function printTest() {
  console.log('cố lến')
}
