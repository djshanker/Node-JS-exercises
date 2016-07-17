/*
Using the process object and the argv functionality
*/

function grab(flag){
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if(!user || !greeting){
	console.log("Nothing !!!");

}
else{
	console.log(`Welcome ${user},${greeting}`);
}