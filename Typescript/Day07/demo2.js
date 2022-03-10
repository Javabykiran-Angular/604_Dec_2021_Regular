// json => java script Object Notation
// We can save a data into key & value format
var myjson = {
    id: 9,
    fname: 'Sumit',
    lname: 'Raokhande'
};
//1 using dot operator
//2 Square Operator
//1 using dot operator
console.log("\n  ID         :: ".concat(myjson.id, "\n  First Name :: ").concat(myjson.fname, " \n  Last Name  :: ").concat(myjson.lname, "\n"));
//2 Square Operator
console.log("\n  Id        :: ".concat(myjson["id"], "\n  First Name:: ").concat(myjson['fname'], "\n  Last Name :: ").concat(myjson['lname'], "\n"));
