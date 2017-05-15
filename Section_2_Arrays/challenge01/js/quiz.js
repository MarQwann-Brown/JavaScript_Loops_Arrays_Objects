/*jslint white: true, sloppy: true, maxerr: 1000*/
//ask series of 3 questions and evaluate answer
//keep track of questions answered
//keep track of questions answered wrong -- "You answered *userAnswer*, the correct answer is *correctAnswer*"
var qa = [
    ['How many states are there in the USA?', '50'],
    ['How many letters are there in the alphabet?', '26'],
    ['What is 10 x 10?', '100']
];
var i;
var questionNumber;
var userAnswer = [];

function print(message) {
    document.write(message);
}
//asks questions and stores the answers in 'userAnswer'
for (i = 0; i < qa.length; i+=1){
	questionNumber = i+1;
    userAnswer.push(prompt(qa[i][0]));
	
	if(userAnswer[i] === qa[i][1]){
		print('You correctly answered question number ' + questionNumber + ': '+ '"' + qa[i][0] + '"' + '<br>');
	} else{
		print('Your answer for question number ' + questionNumber +  ' was incorrect. The correct answer is ' + qa[i][1] + '<br>');
	}

	//Your answer for question number 1: "934" was incorrect, the correct answer is 50
	
//print(userAnswer);
}