var number = prompt("กรอกเลขที่ 2 หลักที่ต้องการซื้อ")
console.log("เลขที่เลือก " + number)
document.getElementById("result").innerHTML = number
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
// let num3 = Math.floor(Math.random() * 10);
var correct = "" + num1 + num2
console.log(correct)
document.getElementById("random").innerHTML = correct
if (number == correct) {
    // alert("คุณถูกหวย")
    document.getElementById("atention").innerHTML = "คุณถูกรางวัล"
}
else{
    // alert("คุณไม่ถูกรางวัล")
    document.getElementById("atention").innerHTML = "คุณไม่ถูกรางวัล"
}
