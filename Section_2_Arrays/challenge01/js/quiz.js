/*jslint white: true, sloppy: true, maxerr: 1000*/
//ask series of 3 questions and evaluate answer
//keep track of questions answered
//keep track of questions answered wrong -- "You answered *userAnswer*, the correct answer is *correctAnswer*"
var questionAnswerArray = [
    ['How many states are there in the USA?', '50'],
    ['How many letters are there in the alphabet?', '26'],
    ['What is 10 x 10?', '100']
];
var i;
var questionNumber;
var userAnswerArray = [];
var questionsCorrect;
var questionsIncorrect;

function print(message) {
    document.write(message);
}

console.log(questionAnswerArray);
print('<b>' + 'You got these answers correct:' + '</b>' + '<br>');
//asks questions and stores the answers in 'userAnswer'
for (i = 0; i < questionAnswerArray.length; i+=1){
	questionNumber = i+1;
    userAnswerArray.push(prompt(questionAnswerArray[i][0]));
	userAnswerArray.unshift(questionAnswerArray[i][0]);
}

console.log(userAnswerArray);
print(userAnswerArray);
//for (i = 0; i < userAnswerArray.length; i+=1){
//	if (userAnswerArray[i] === questionAnswerArray[i][1]){
//		print('<br>' + qa[i][0] + '<br>');
//	} else if (userAnswer[i] !== qa[i][1]){
//		print('<br' + 'You got these questions wrong:' + '<br>');
//		print('<br>' + qa[i][0] + '<br>');
//		}
	


	//Your answer for question number 1: "934" was incorrect, the correct answer is 50
	
//print(userAnswer);
