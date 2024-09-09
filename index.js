let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

if (random>0.1) {
    if (c == "+") {
        alert(a + b)
    }
    else if (c == "-") {
        alert(a - b)
    }
    else if (c == "*") {
        alert(a * b)
    }
    else if (c == "/") {
        alert(a / b)
    }
} else{
    alert("You are not allowed to use calculator")
}
if (random<0.1) {
    if (c == "+") {
        alert(a - b)
    }
    else if (c == "-") {
        alert(a * b)
    }
    else if (c == "*") {
        alert(a + b)
    }
    else if (c == "/") {
        alert(a + b)
    }
} else{
    alert("You are not allowed to use calculator")
}