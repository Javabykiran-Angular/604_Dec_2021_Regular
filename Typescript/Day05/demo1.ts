
// Function Declaration/defination or function statement
// function add1(a:number,b:number){
    // ...
//}

// Anonymous Functions

//Function Expression
  var temp1=function (){
    console.log("Anonymous Functions is called...")
  }

  // temp1();

var sonu=function (a:number,b:number):number{
    return (a+b);
}

let res=sonu(4,5);
// console.log(`Result is ${res}`)

//Fat arrow Function/ Arrow Function

   var temp3= ()=>{
      console.log("Fat Arrow function is called..")
    }

    // temp3();

    var temp4=(a:number,b:number):number=>{
      return (a+b);
    }

    // console.log(`Result is ${temp4(5,2)}`);

//Optional Parameter Functions

function add1(a:number,b?:number){
  console.log('Value of a is '+a) // 7
  console.log('Value of b is '+b) // 3
  console.log('Result of a+b is '+(a+b)) //10
}

// add1(7);
// add1(7,3);

function add2(a?:number,b?:number){
  console.log('Value of a is '+a) // 
  console.log('Value of b is '+b) // 
  console.log('Result of a+b is '+(a+b)) //
}

// add2();

// Default Parameter Functions

function add3(a:number,b:number=4){
  console.log('Value of a is '+a) // 8
  console.log('Value of b is '+b) // 6
  console.log('Result of a+b is '+(a+b)) //14
}

// add3(8);
// add3(8,6);

function add4(a:number=9,b:number){
  console.log('Value of a is '+a) // 8
  console.log('Value of b is '+b) // 6
  console.log('Result of a+b is '+(a+b)) //14
}

// add4(7,5);


var temp5=(a:number,b:number=7):number=>{
  return (a+b);
}


// console.log(`Addition is ${temp5(4)}`)

var temp6=(a:number,b:number=7,c?:number):number=>{
  return (a+b+c) 
}

var res1=temp6(1)
console.log("Result is "+res1);