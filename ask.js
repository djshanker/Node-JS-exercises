/*
Standrd input and standard output methods of the Process object
Uses data event listeners
*/

var questions = [

	"What is your name?",
	"What is your fav pet name?",
	"what is your friends name?"
];

var answers = [];

function ask(i) {

	
	process.stdout.write(`\n\n\n\n ${questions[i]}`);
	
	process.stdout.write("  >  ");
	

}

process.stdin.on('data',function(data){

	answers.push(data.toString().trim());
	if(answers.length < questions.length){
		ask(answers.length);
	} else{
	process.exit();
}

});

process.on('exit', function(){
	


	process.stdout.write('\n\n\n\n');

	
	process.stdout.write(`GO ${answers[1]} your name is ${answers[0]} and friend is ${answers[2]}`);

	process.stdout.write('\n\n\n\n');

});


ask(0);

