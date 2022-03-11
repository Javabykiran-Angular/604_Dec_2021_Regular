"use strict";
exports.__esModule = true;
exports.pi = exports.add1 = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(id, f, l) {
        this.id = id;
        this.fname = f;
        this.lname = l;
    }
    Myclass.prototype.display = function () {
        console.log("\n        Id  :: ".concat(this.id, "\n        First name :: ").concat(this.fname, "\n        Last Name:: ").concat(this.lname, "\n      "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();
function add1(a, b) {
    return (a + b);
}
exports.add1 = add1;
exports.pi = 3.14;
