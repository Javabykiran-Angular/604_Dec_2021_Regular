//Array
//core java => Array 
//core java=> array data type,size important,array name ,homogenous array u can create
//Typescript Array
// Array is growable & shrinkable
// Array homogenous As well as hetrogenous data
// don not mentioned any size
var a1 = [2, 3, 5, 8];
var a2 = [11, 2.5, 13, 45];
var a3 = [];
var a4 = ['sumit', 2.5, true, 9];
var a5 = [];
// for(let i=0;i<a1.length;i++){
//   console.log(`Array is a1[${i}]=${a1[i]}`)
// }
// console.log("Array is "+a1)
// console.log("Array is "+a1.join(' # '));
//ForEach
// a1.forEach((myvalue,i)=>{
//   console.log("Value is "+myvalue+" Index is "+i)
// })
// Rest parameter Functions
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Item value is " + item.join(" "));
}
// display(4,5,6,7,88);
// display();
// function display1(a:string,...item:number[]){
//   console.log("Item value is "+item.join(" "));
//   console.log("A value is "+a)
// }
// display1('Sumit',7,8,9,6,45)
var b1 = [];
//1 Using Push & pop Method
//2 Using Splice method
//1 Using Push & pop Method
// It works on LIFO Principle=> Last in first out
b1.push(45);
console.log(b1);
b1.push(77, 85, 2, 33);
console.log(b1);
var value = b1.pop();
console.log(b1);
console.log("Poped value is " + value);
