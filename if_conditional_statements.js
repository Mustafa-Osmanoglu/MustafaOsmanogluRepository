let a=100

if (a >=50 ) {

console.log("a is greater than 50")

}

if (a >= 500) {

console.log("a is greater than 500") // a 500den büyük olmadığı için yazdırmayacaktır. if condition ı not true olduğundan ötürü atlayacaktır.

}
else {

console.log("a is not greater than 500")

}

console.log ("done")

var x = 300
var b = 100
var c = 600

if ((x > b) && (x > c)) {
console.log("x is the biggest of 3 integers.")
} else if (b > c) {
console.log("b is the biggest of 3 integers.")
} else {
console.log("c is the biggest of 3 integers.")
}

/*
Note: If the first condition '((x > b) && (x > c))' returns 'true'
then the code from the if block gets executed.
If it returns 'false' then the second condition '(b > c)' is evaluated.
This continues if multiple 'else if' blocks are used.
*/

/*
JavaScript for Developers and Automation Testers. Learn JavaScript for Cypress, WebDriverIO and Other Automation Tools, 14 th course notes... similar codes from that lesson.

*/
