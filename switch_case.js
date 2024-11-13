let num1 = 200
let num2 = 10

let operation = "Multiplication"

switch(operation){
    case "Addition":
        console.log("Addition is: ", (num1 + num2))
        break
    case "Subtraction":
        console.log("Subtraction is: ", (num1 - num2))
        break
    case "Multiplication":
        console.log("Multiplication is: ", (num1 * num2))
        break
    default:
        console.log("Invalid operation")
        break
}

/*
Note: If value of a case matches the switch key then
the code from that perticular case gets executed.
'break' statement is required to break out of the
switch case block in JS.
*/
