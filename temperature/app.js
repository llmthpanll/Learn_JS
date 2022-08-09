function tocelsius() {
    let fahrenheit = prompt("fahrenheit : ")
    let ans = (fahrenheit-32)*5/9
    document.getElementById("fah").innerHTML = ans.toFixed(2) + "°C"
}
function tofahrenheit() {
    let celsius = prompt("celsius : ")
    let ans = (celsius*9/5)+32
    document.getElementById("cel").innerHTML = ans.toFixed(2) + "°F"
}

tocelsius()
tofahrenheit()