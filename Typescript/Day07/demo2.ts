// json => java script Object Notation
// We can save a data into key & value format

let myjson={
  id:9,
  fname:'Sumit',
  lname:'Raokhande'
}

//1 using dot operator
//2 Square Operator

//1 using dot operator

console.log(`
  ID         :: ${myjson.id}
  First Name :: ${myjson.fname} 
  Last Name  :: ${myjson.lname}
`)


//2 Square Operator
console.log(`
  Id        :: ${myjson["id"]}
  First Name:: ${myjson['fname']}
  Last Name :: ${myjson['lname']}
`)
