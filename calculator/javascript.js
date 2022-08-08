let qrt = prompt("จำนวนสินค้า")
let sum = 0
for(var i = 1; i <= Number(qrt); i++) {
    let item_price = prompt("ราคาสินค้าชิิ้นที่" + i)
    sum += parseFloat(item_price)
    document.getElementById("price-list").innerHTML += "รายการสินคาชิ้นที่ " + i + " : " + item_price + " บาท" + "<br>"
}
document.getElementById("result").innerHTML = "ราคาของสินค้าทั้งหมด : " + sum + " บาท"