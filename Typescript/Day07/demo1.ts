//splice

let a:number[]=[44,12,32,5,8];
// console.log(a)

// a.splice(2,0,88);
// console.log(a)
// a.splice(1,0,7,78)
// console.log(a);
// a.splice(5,1);
// console.log(a)
// a.splice(5,2);
// console.log(a)
// a.splice(2,1,90);
// console.log(a)
// a.splice(1,1,50,55,56)
// console.log(a)
// a.splice(6,3);
// console.log(a)


//slice
// It Copies a section of data & returns a new array

let a1=[10,12,13,22,45,87,90,66,77,99];
let temp=a1.slice(1,8)
// console.log("original Data "+a1);
// console.log("Copies data "+temp);
// let a2:any[]=[2.5,'sumit',true,9,45,'Raokhande',false];
// let temp2=a2.slice(1,4);
// console.log("Original data "+a2)
// console.log("Copied data "+temp2);
// let temp3=a2.slice(2);
// console.log(`
//     ${temp3}
// `)


//map
let b1=[2,4,5,6,7];

let res=b1.map((myvalue)=>{
    return (myvalue*myvalue)
})

console.log("Original Array "+b1);
console.log("\n Square array "+res)