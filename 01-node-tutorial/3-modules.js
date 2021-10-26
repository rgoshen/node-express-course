// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils.js");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

console.log(names);
console.log(data);

sayHi("Rick");
sayHi(john);
sayHi(peter);
