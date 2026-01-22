const num  = prompt("Enter a number  you want to Table ")

i = 1
for (let i=1 ; i<=10 ; i++  ){
    console.log(`${num} * ${i} = ${num*i}`)
}

let result = "";
let i=1
while (i<=11) {
    console.log(num+  "x" + i + "=" + (num*i))
    i++
    
}
document.getElementById("output").innerHTML  = result;