
function assignValue() {

let number = document.getElementById("number").value

document.getElementById("number").textContent = number
document.getElementById("meters").textContent = number
document.getElementById("feet").textContent = number
document.getElementById("liters").textContent = number
document.getElementById("gallons").textContent = number
document.getElementById("kilos").textContent = number
document.getElementById("pounds").textContent = number

let meterToFeet =  number * 3.28084
let mtft = meterToFeet.toFixed(3)
document.getElementById("mttoft").innerText = mtft

let feetToMeter = number / 3.28084
let fttom = feetToMeter.toFixed(3)
document.getElementById("fttomt").innerText = fttom

let literToGallon = number * 0.264172
let ltog = literToGallon.toFixed(3)
document.getElementById("ltog").innerText = ltog

let gallonToLiter = number / 0.264172
let gtol = gallonToLiter.toFixed(3)
document.getElementById("gtol").innerText = gtol

let kiloToPound = number * 2.20462
let ktop = kiloToPound.toFixed(3)
document.getElementById("ktop").innerText = ktop

let poundToKilo = number / 2.20462
let ptok = poundToKilo.toFixed(3)
document.getElementById("ptok").innerText = ptok
}



