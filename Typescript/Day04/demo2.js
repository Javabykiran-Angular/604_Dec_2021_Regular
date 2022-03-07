// add1();
// 1 function without paramter & without Return type
// 2 function with paramter & without Return type
// 3 function without paramter & with Return type
// 4 function with paramter & with Return type
// 1 function without paramter & without Return type
function add1() {
    console.log("Function type 1 is called...");
}
// 2 function with paramter & without Return type
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(10,2);
// 3 function without paramter & with Return type
function add3() {
    return (4 + 5);
}
var res = add3();
// console.log(`Addition is ${res}`)
// 4 function with paramter & with Return type
function add4(a, b) {
    return (a + b);
}
// console.log(`Addition is ${add4(7,6)}`)
function add5(lname, fname) {
    return (fname + " " + lname);
}
// console.log(`Full name is ${add5('Raokhande','Sumit')}`)
var pi = 3.14;
console.log(pi);
