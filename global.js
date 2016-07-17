/*
Ex: To show the require functionality in Node and also the template string output.
*/

var path = require("path");

console.log(`This is the sliced version ${path.basename(__filename)}`);

