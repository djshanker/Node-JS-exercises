/*
Path,v8 and Utilities module examples:
Also gets memory usage stats.
*/



var path = require('path');
var util = require('util');
var v8 = require('v8');


util.log( path.basename(__filename) );
console.log( path.basename(__filename)); // this will pluck out the base file from this full path.

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUploads);
util.log(v8.getHeapStatistics());