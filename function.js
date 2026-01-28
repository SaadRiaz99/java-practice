function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        return "Error: Division by zero not allowed";
    }
    return a / b;
}

let a = parseFloat(prompt("Enter Number a:"));
let b = parseFloat(prompt("Enter Number b:"));

console.log("1 = Add, 2 = Subtract, 3 = Multiply, 4 = Divide");
let choice = parseInt(prompt("Choose operation:"));

if (choice === 1) {
    console.log("Result:", add(a, b));
}
else if (choice === 2) {
    console.log("Result:", sub(a, b));
}
else if (choice === 3) {
    console.log("Result:", mul(a, b));
}
else if (choice === 4) {
    console.log("Result:", div(a, b));
}
else {
    console.log("Invalid choice");
}